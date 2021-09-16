import { useEffect, useState } from "react";
import { EventListUser } from "../../components/eventListUser";
import VoluntaryMenu from "../../components/voluntaryMenu";
import api from "../../services/api";
import { Container, Contents } from "./styles";
import { useLogin } from "../../Providers/Login-Voluntaries";
import { BiMenuAltLeft } from "react-icons/bi";
import { Loading } from "../../components/loading";
import { toast } from "react-toastify";

interface iEventUser {
  id: number;
  idEvent: number;
  idInstitution: number;
  idUser: number;
  nameInstitution: string;

  event: {
    date: string;
    duration: string;
    name: string;
    hour: string;
    local: string;
    describe: string;
  };
}

interface iInstitute {
  id: number;
}
interface iUserName {
  name: string;
}

export const EventsVoluntary = () => {
  const { userToken, userId } = useLogin();
  const [visible, setVisible] = useState(false);
  const [userName, setUseName] = useState<iUserName[]>([] as iUserName[]);
  const [eventsUser, setUserEvents] = useState<iEventUser[]>(
    [] as iEventUser[]
  );
  const [institutionId, setInstitutionId] = useState<iInstitute[]>(
    [] as iInstitute[]
  );
  const [control, setControl] = useState<boolean>(false)

  useEffect(() => {
    reqEventUser();
    reqInstitutionId();
    reqUserName();

  }, [eventsUser]);

  const reqInstitutionId = async () => {
    const response = await api.get("/users?type=Institution", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    setInstitutionId(response.data);
  };

  const reqUserName = async () => {
    const response = await api.get(`/users?id=${userId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    setUseName(response.data);
  };

  const reqEventUser = async () => {
    const response = await api.get(`/subscribeEvents?idUser=${userId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    await setUserEvents(response.data);
    setControl(true)
  };

  const showMenu = () => {
    setVisible(true);
  };

  const cancelEvent = async (id: number) => {
    const response = await api.delete(`/subscribeEvents/${id}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    reqEventUser();
    toast.success("Você deixou de participar do evento");
  };

  return (
    <Container>
      <VoluntaryMenu visible={visible} setVisible={setVisible} />
      <BiMenuAltLeft className="Open" onClick={showMenu} />

      <Contents>
        <>
          <h4>
            {userName.map((user) => {
              return `Seja bem vindo ${user.name}`
            })}
          </h4>

          <section className="Card">
            <h2>Meus Eventos</h2>
            {control ?
              <>
                {eventsUser.map((e, index) => {
                  return (
                    <section className="Event">
                      <EventListUser
                        key={index}
                        event={e.event}
                        instituteName={e.nameInstitution}
                      />
                      <button className="Cancel" onClick={() => cancelEvent(e.id)}>
                        Cancelar
                      </button>
                    </section>
                  );
                })}
              </>
              :

              <Loading />
              
              }

          </section>
        </>
      </Contents>



    </Container>
  );
};
