import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuthContext();

  const login = async ({ uName, pswd }) => {
    const hasErr = handleErrors({ uName, pswd });
    if (hasErr) return;
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: uName,
          password: pswd,
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

  return { isLoading, login };
};

export default useLogin;

const handleErrors = ({ uName, pswd }) => {
  if (!uName || !pswd) {
    toast.error('Please fill all fields...');
    return true;
  }
  if (pswd.length < 6) {
    toast.error('Password must have at least 6 characters...');
    return true;
  }
  return false;
};
