import { createContext, useContext } from 'react';
import { useImmer } from 'use-immer';

const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useImmer(
    JSON.parse(localStorage.getItem('chatUser')) || null,
  );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
