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
  setAuth: Dispatch<SetStateAction<string>>;
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
  const token = localStorage.getItem("accessToken") || "";

  const [auth, setAuth] = useState<string>(token);

  const signIn = (
    userData: FormValues,
    setError: Dispatch<SetStateAction<boolean>>,
    history: History
  ) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem("accessToken", response.data.access);
        setAuth(response.data.access);
        history.push("/institutional-dashboard");
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
