import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addMessage } from '../components/msgview/MessagesSlice';

const useSend = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { selected: id } = useAppSelector((state) => state.people);
  const dispatch = useAppDispatch();

  const send = async (msg) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/message/send/${id}`, {
        method: 'POST',
        body: JSON.stringify({
          msg,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      dispatch(addMessage(data));
      return data;
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, send };
};

export default useSend;
