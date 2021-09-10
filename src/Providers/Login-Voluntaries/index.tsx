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
import api from "../../services/api";
import jwt_decode from "jwt-decode";

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
  const userID = localStorage.getItem("@Bom ancião: userID") || "";

  const [auth, setAuth] = useState<string>(token);
  const [userId, setUserId] = useState<string>(userID);

  const singIn = useCallback(async (data: userData, history: History) => {
    console.log(data);
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem("@Bom ancião: token", response.data.accessToken);
        setAuth(response.data.accessToken);
        console.log("login efetuado");
        const usersID: any = jwt_decode(response.data.accessToken);
        setUserId(usersID.sub);
        localStorage.setItem("@Bom ancião: userID", usersID.sub);
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
