import { TbMessages } from 'react-icons/tb';
import { useAuthContext } from '../../context/AuthContext';

const Welcome = () => {
  const { user } = useAuthContext();
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2 px-4 text-center font-semibold text-white sm:text-lg md:text-xl">
        <p>Welcome 👋 {user.userName}</p>
        <p>Select a chat to start messaging...</p>
        <TbMessages className="text-center text-3xl md:text-6xl" />
      </div>
    </div>
  );
};

export default Welcome;
