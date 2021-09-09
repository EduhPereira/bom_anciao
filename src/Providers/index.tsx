import { ReactNode } from "react";
import LoginProvider from "./Login-Voluntaries";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <LoginProvider>{children}</LoginProvider>;
};

export default AppProvider;
