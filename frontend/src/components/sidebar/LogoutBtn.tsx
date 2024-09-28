import { CiLogout } from 'react-icons/ci';
import useLogout from '../../hooks/useLogout';

const LogoutBtn = () => {
  const { isLoading, logout } = useLogout();
  return (
    <div className="mt-4">
      {isLoading ? (
        <span className="loading loading-spinner" />
      ) : (
        <CiLogout
          className="h-6 w-6 cursor-pointer text-white"
          onClick={logout}
        />
      )}
    </div>
  );
};

export default LogoutBtn;
