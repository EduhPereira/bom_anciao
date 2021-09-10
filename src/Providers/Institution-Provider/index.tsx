import React from "react";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { History } from "history";
import api from "../../services/api";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

type FormValues = {
  email: string;
  password: string;
};

interface ISignup {
  name: string;
  email: string;
  address: string;
  password: string;
  cnpj: string;
  city: string;
  type: string;
}

interface AuthProviderData {
  token: string;
  setAuth: React.Dispatch<SetStateAction<string>>;
  signIn: (
    userData: FormValues,
    setError: Dispatch<SetStateAction<boolean>>,
    history: History
  ) => void;
  signUp: (
    userData: ISignup,
    setError: Dispatch<SetStateAction<boolean>>,
    history: History
  ) => void;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthInstitutionContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthInstitutionProvider = ({ children }: AuthProviderProps) => {
  const token = localStorage.getItem("@Bom ancião: token") || "";
  const institutionID =
    localStorage.getItem("@Bom ancião: institutionID") || "";

  const [auth, setAuth] = useState<string>(token);
  const [institutionId, setInstitutionId] = useState<string>(institutionID);

  const signIn = (
    userData: FormValues,
    setError: Dispatch<SetStateAction<boolean>>,
    history: History
  ) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("@Bom ancião: token", response.data.accessToken);
        setAuth(response.data.accessToken);
        const institutionsID: any = jwt_decode(response.data.accessToken);
        setInstitutionId(institutionsID.sub);
        localStorage.setItem("@Bom ancião: institutionID", institutionsID.sub);
        history.push("/dashboard-institution");
      })
      .catch((err) => setError(true));
  };

  const signUp = (
    userData: FormValues,
    setError: Dispatch<SetStateAction<boolean>>,
    history: History
  ) => {
    api
      .post("/register", userData)
      .then(() => {
        toast.success("Cadastro realizado com sucesso!🥳");
        return history.push("/login-institution");
      })
      .catch((err) => setError(true));
  };

  const signOut = () => {
    localStorage.clear();
    setAuth("");
  };

  return (
    <AuthInstitutionContext.Provider
      value={{ token: auth, setAuth, signIn, signOut, signUp }}
    >
      {children}
    </AuthInstitutionContext.Provider>
  );
};

export const useAuthInstitution = () => useContext(AuthInstitutionContext);
