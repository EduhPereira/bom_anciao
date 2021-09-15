import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { toast } from "react-toastify";
import AddEvents from "../../components/InstitutionAddEvents";
import EditEvents from "../../components/InstitutionEditEvent";
import InstitutionMenu from "../../components/institutionMenu";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import api from "../../services/api";
import {
  CardEvents,
  Container,
  Event,
  TitleEvent,
  ButtonCreateEvent,
  ButtonRmv,
  ButtonAtt,
  Content,
} from "./styles";

interface EventInstitution {
  nameInstitution: string;
  local: string;
  date: string;
  hour: string;
  duration: string;
  name: string;
  describe: string;
  id: number;
  idInstitution?: number;
}

interface InstituitionName {
  name: string;
}

const DashboardInstitution = () => {
  const [events, setEvents] = useState<EventInstitution[]>(
    [] as EventInstitution[]
  );
  const [nameIns, setNameIns] = useState<InstituitionName[]>(
    [] as InstituitionName[]
  );
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAtt, setModalAtt] = useState(false);
  const [object, setObject] = useState<number>(1);

  const { token } = useAuthInstitution();

  const institutionID =
    localStorage.getItem("@Bom ancião: institutionID") || "";

  async function loadEvents() {
    const response = await api.get(`events?idInstitution=${institutionID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    setEvents(data);
  }

  async function loadNameInstitution() {
    const response = await api.get(
      `users?type=Institution&&id=${institutionID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data;
    setNameIns(data);
  }

  async function deleteEvent(id: number) {
    const response = await api.delete(`events/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("✅ Evento deletado com sucesso!");
    loadEvents();
  }

  const updateEvent = (id: number) => {
    setObject(id);
    setModalAtt(true);
  };

  const addNewEvent = () => {
    setModalVisible(true);
  };

  useEffect(() => {
    loadEvents();
    loadNameInstitution();
  }, [events]);

  const showMenu = () => {
    setVisible(true);
  };

  return (
    <Container>
      <InstitutionMenu visible={visible} setVisible={setVisible} />
      <BiMenuAltLeft className="Open" onClick={showMenu} />
      <AddEvents
        nameInst={nameIns}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        loadEvents={loadEvents}
      />
      <EditEvents
        nameInst={nameIns}
        setModalAtt={setModalAtt}
        modalAtt={modalAtt}
        loadEvents={loadEvents}
        id={object}
      />
      <Content>
        {nameIns.map((event) => (
          <h4>{event.name}</h4>
        ))}
        <CardEvents>
          <TitleEvent>
            <h2>Eventos</h2>
            <ButtonCreateEvent onClick={addNewEvent}>
              Criar evento
            </ButtonCreateEvent>
          </TitleEvent>
          {events.map((event) => (
            <Event key={event.id}>
              <div className="card-event" key={event.idInstitution}>
                <p>Atividade: {event.name}</p>
                <p>
                  Quando: {event.date} {event.hour}
                </p>
                <p>Duração: {event.duration}</p>
                <p>Descrição: {event.describe}</p>
                <div className="button">
                  <ButtonAtt onClick={() => updateEvent(event.id)}>
                    Atualizar
                  </ButtonAtt>
                  <ButtonRmv onClick={() => deleteEvent(event.id)}>
                    Remover
                  </ButtonRmv>
                </div>
              </div>
            </Event>
          ))}
        </CardEvents>
      </Content>
    </Container>
  );
};

export default DashboardInstitution;
