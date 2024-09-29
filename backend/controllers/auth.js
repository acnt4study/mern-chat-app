import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import genTokenAndSetCookie from '../utils/genToken.js';

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({
        error: 'Passwords not matching...',
      });
    }
    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({
        error: 'Username already exists...',
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const boygirl = gender === 'male' ? 'boy' : 'girl';
    const pic = `https://avatar.iran.liara.run/public/${boygirl}?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: pic,
    });
    if (newUser) {
      genTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        fullName: newUser.fullName,
        userName: newUser.userName,
        gender: newUser.gender,
        id: newUser._id,
        pic: newUser.profilePic,
      });
    } else {
      res.status(400).json({
        error: 'Invalid user data...',
      });
    }
  } catch (e) {
    console.log('Error in signup controller', e.message);
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ''
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({
        error: 'Invalid username or password...',
      });
    }

    genTokenAndSetCookie(user._id, res);
    res.status(200).json({
      fullName: user.fullName,
      userName: user.userName,
      gender: user.gender,
      id: user._id,
      pic: user.profilePic,
    });
  } catch (e) {
    console.log('Error in login controller', e.message);
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie('jwt', '', {
      maxAge: 0,
    });
    res.status(200).json({
      message: 'Logged Out successfully...',
    });
  } catch (e) {
    console.log('Error in logout controller', e.message);
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};
