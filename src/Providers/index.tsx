import { ReactNode } from "react";
import AddEventsProvider from "./Events-Institution";
import { AuthInstitutionProvider } from "./Institution-Provider";
import LoginProvider from "./Login-Voluntaries";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <LoginProvider>
      <AuthInstitutionProvider>
        <AddEventsProvider>{children}</AddEventsProvider>
      </AuthInstitutionProvider>
    </LoginProvider>
  );
};

export default AppProvider;
