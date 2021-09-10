import { ReactNode } from "react";
import { AuthInstitutionProvider } from "./Institution-Provider";
import LoginProvider from "./Login-Voluntaries";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <LoginProvider>
      <AuthInstitutionProvider>{children}</AuthInstitutionProvider>
    </LoginProvider>
  );
};

export default AppProvider;
