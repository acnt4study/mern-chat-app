import User from "../models/user.js";

export const getUsers = async (req, res) => {
    try {
        const { _id: id } = req.user;
        const users = await User.find({
            _id: { $ne: id }
        }).select("-password")
        res.status(200).json(users)
    } catch (e) {
        console.log('Error in getUsers controller', e.message);
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
}