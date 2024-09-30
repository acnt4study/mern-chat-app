import { createContext, type ReactNode, useContext } from 'react';
import { useImmer } from 'use-immer';

type AuthValues = {
  user: object;
  setUser: any;
};

const AuthContext = createContext<AuthValues>({} as AuthValues);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useImmer(
    JSON.parse(localStorage.getItem('chatUser')!) || null,
  );
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
