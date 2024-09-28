import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuthContext();

  const signup = async ({ fName, uName, pswd, cpswd, gender }) => {
    const hasErr = handleErrors({ fName, uName, pswd, cpswd, gender });
    if (hasErr) return;
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fName,
          userName: uName,
          password: pswd,
          confirmPassword: cpswd,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem('chatUser', JSON.stringify(data));
      setUser(data);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, signup };
};

export default useSignup;

const handleErrors = ({ fName, uName, pswd, cpswd, gender }) => {
  if (!fName || !uName || !pswd || !cpswd || !gender) {
    toast.error('Please fill all fields...');
    return true;
  }
  if (pswd !== cpswd) {
    toast.error('Passwords not matching...');
    return true;
  }
  if (pswd.length < 6) {
    toast.error('Password must have at least 6 characters...');
    return true;
  }
  return false;
};
