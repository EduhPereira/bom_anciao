import React, { useEffect } from "react";
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
  userToken: string;
  userId: string;
  setUserId: React.Dispatch<SetStateAction<string>>;
  userName: string;
}

interface userData {
  email: string;
  password: string;
}

const LoginContext = createContext<AuthProviderData>({} as AuthProviderData);

const LoginProvider = ({ children }: AuthProviderProps) => {
  const userToken = localStorage.getItem("@Bom ancião: token") || "";
  const userID = localStorage.getItem("@Bom ancião: userID") || "";

  const [auth, setAuth] = useState<string>(userToken);
  const [userId, setUserId] = useState<string>(userID);
  const userName = localStorage.getItem("name") || "";

  const req = () => {
    api
      .get(`/users/${userId}`)
      .then((res) => localStorage.setItem("name", res.data.name))
      .catch((err) => console.log(err));
  }

  const singIn = useCallback(async (data: userData, history: History) => {
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
      .then((response) => {
        history.push("/my-events")
      })
      .catch((err) => console.log("login e senha invalidos!"));
      req()
  }, []);

  useEffect(() => {
    
  }, [userId]);

  

  return (
    <LoginContext.Provider
      value={{
        singIn,
        userToken: auth,
        auth,
        setAuth,
        userId,
        setUserId,
        userName,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;

export const useLogin = () => useContext(LoginContext);
