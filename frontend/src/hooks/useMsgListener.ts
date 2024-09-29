import { useEffect } from 'react';
import { addMessage } from '../components/msgview/MessagesSlice';
import { useAppDispatch } from '../redux/hooks';
import { useSocketContext } from '../context/SocketContext';
import notify from '../assets/notify.wav';

const useMsgListener = () => {
  const dispatch = useAppDispatch();
  const { socket } = useSocketContext();

  useEffect(() => {
    socket?.on('newMsg', (newMsg) => {
      newMsg.shake = true;
      const sound = new Audio(notify);
      sound.play();
      dispatch(addMessage(newMsg));
    });
    return () => socket?.off('newMsg');
  }, [dispatch, socket]);
};

export default useMsgListener;
