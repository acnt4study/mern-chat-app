import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../redux/hooks';
import { resetPeople } from '../components/sidebar/PeopleSlice';
import { resetMessgaes } from '../components/msgview/MessagesSlice';

const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuthContext();
  const dispatch = useAppDispatch();

  const logout = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/logout');
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem('chatUser');
      setUser(null);
      dispatch(resetPeople());
      dispatch(resetMessgaes());
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, logout };
};

export default useLogout;
