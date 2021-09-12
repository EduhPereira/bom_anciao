import {
  createContext,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { useAuthInstitution } from "../Institution-Provider";

interface AddEventsProps {
  children: ReactNode;
}
interface AddEventsData {
  CreateEvent: any;
  //   loggedUser: string;
  //   setLoggedUser: React.Dispatch<SetStateAction<string>>;
}

const AddEventsContext = createContext<AddEventsData>({} as AddEventsData);

const AddEventsProvider = ({ children }: AddEventsProps) => {
  const { token, institutionId } = useAuthInstitution();

  //   const [loggedUser, setLoggedUser] = useState<string>("");

  //   useEffect(() => {
  //     api
  //       .get(`/users/${institutionId}`)
  //       .then((response) => setLoggedUser(response.data.name))
  //       .catch((err) => console.log(err));
  //   }, []);

  const CreateEvent = useCallback(async (data, nameIns) => {
    api
      .post(
        "/events",
        {
          nameInstitution: nameIns,
          idInstitution: Number(institutionId),
          local: data.local,
          date: data.date,
          hour: data.hour,
          duration: data.duration,
          name: data.name,
          describe: data.desciption,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxkbEBtYWlsLmNvbSIsImlhdCI6MTYzMTMwOTMzNiwiZXhwIjoxNjMxMzEyOTM2LCJzdWIiOiI3In0.QyQIzkaeIdxCD6aarlMsDxLZj4GGAbV5vc9bW8p0Gnw`,
          },
        }
      )
      .then((response) => console.log("criado"))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AddEventsContext.Provider value={{ CreateEvent }}>
      {children}
    </AddEventsContext.Provider>
  );
};
export default AddEventsProvider;

export const useAddEvents = () => useContext(AddEventsContext);
