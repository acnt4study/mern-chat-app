import { useEffect, useRef } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useAppSelector } from '../../redux/hooks';
import Message from './Message';
import MessagesSkeleton from '../skeleton/MessagesSkeleton';
import useMsgListener from '../../hooks/useMsgListener';

const Messages = () => {
  const { user } = useAuthContext();
  const msgRef = useRef(null);
  useMsgListener();
  const { messages: msgs, isLoading } = useAppSelector(
    (state) => state.messages,
  );
  const rPic = useAppSelector((state) => state.people.selectedPic);

  useEffect(() => {
    msgRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [msgs]);

  const starterMsg = !isLoading && !msgs.length;

  return (
    <div
      className={`flex-1 overflow-auto px-4 scrollbar-thin ${starterMsg ? 'flex flex-col items-center justify-center' : ''}`}
    >
      {isLoading
        ? [...Array(2)].map((_, i) => <MessagesSkeleton key={i} />)
        : msgs.map((msg) => (
            <Message
              data={msg}
              key={msg._id}
              rPic={rPic}
              sPic={user.pic}
              id={user.id}
            />
          ))}
      {starterMsg && (
        <p className="text-center text-white">
          Send a message to start conversation...
        </p>
      )}
      <div ref={msgRef} />
    </div>
  );
};

export default Messages;
