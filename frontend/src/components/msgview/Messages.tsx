import { useEffect, useRef } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useAppSelector } from '../../redux/hooks';
import Message from './Message';
import MessagesSkeleton from '../skeleton/MessagesSkeleton';

const Messages = () => {
  const { user } = useAuthContext();
  const msgRef = useRef(null);
  const { messages: msgs, isLoading } = useAppSelector(
    (state) => state.messages,
  );
  const rPic = useAppSelector((state) => state.people.selectedPic);

  useEffect(() => {
    msgRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [msgs]);

  return (
    <div className="flex-1 overflow-auto px-4 scrollbar-thin">
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
      {!isLoading && !msgs.length && (
        <p className="text-center">Send a message to start conversation...</p>
      )}
      <div ref={msgRef} />
    </div>
  );
};

export default Messages;
