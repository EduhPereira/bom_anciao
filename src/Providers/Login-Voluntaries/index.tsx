import React from "react";
import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  useCallback,
} from "react";
import { History } from "history";
import api from "../../Services/api"

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  auth: string;
  setAuth: React.Dispatch<SetStateAction<string>>;
  singIn: any;
  token: string;
}

interface userData {
  email: string;
  password: string;
}

const LoginContext = createContext<AuthProviderData>({} as AuthProviderData);

const LoginProvider = ({ children }: AuthProviderProps) => {
  const token = localStorage.getItem("@Bom ancião: token") || "";

  const [auth, setAuth] = useState<string>(token);

  const singIn = useCallback(async (data: userData, history: History) => {
    console.log(data);
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("@Bom ancião: token", response.data.accessToken);
        setAuth(response.data.accessToken);
        console.log("login efetuado");
      })
      .then((response) => history.push("/dashboardVol"))
      .catch((err) => console.log("login e senha invalidos!"));
  }, []);

  return (
    <LoginContext.Provider value={{ singIn, token: auth, auth, setAuth }}>
      {children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;

export const useLogin = () => useContext(LoginContext);
