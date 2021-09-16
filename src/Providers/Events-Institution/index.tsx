import { createContext, ReactNode, useCallback, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useAuthInstitution } from "../Institution-Provider";

interface AddEventsProps {
  children: ReactNode;
}
interface AddEventsData {
  CreateEvent: any;
}

const AddEventsContext = createContext<AddEventsData>({} as AddEventsData);

const AddEventsProvider = ({ children }: AddEventsProps) => {
  const { token, institutionId } = useAuthInstitution();

  const CreateEvent = useCallback(async (data, nameIns) => {
    const date = data.date.split("-").reverse().join("/");

    api
      .post(
        "/events",
        {
          nameInstitution: nameIns,
          idInstitution: Number(institutionId),
          local: data.local,
          date: date,
          hour: data.hour,
          duration: data.duration,
          name: data.name,
          describe: data.describe,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => toast.success("Evento criado com sucesso!"))
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
