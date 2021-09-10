import { useEffect, useState } from "react";
import AddEvents from "../../components/InstitutionAddEvents";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import api from "../../services/api";
import { CardEvents, Container, Event, TitleEvent, Button } from "./styles";

interface Event {
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
  const [events, setEvents] = useState<Event[]>([] as Event[]);
  const [nameIns, setNameIns] = useState<InstituitionName[]>(
    [] as InstituitionName[]
  );

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
    loadEvents();
    console.log(response);
  }

  useEffect(() => {
    loadEvents();
    loadNameInstitution();
  }, []);

  return (
    <Container>
      {nameIns.map((event) => (
        <h2>{event.name}</h2>
      ))}
      <AddEvents nameInst={nameIns} />
      <CardEvents>
        <TitleEvent>
          <h2>Eventos</h2>
        </TitleEvent>
        {events.map((event) => (
          <Event>
            <div className="card-event" key={event.idInstitution}>
              <p>Atividade: {event.name}</p>
              <p>
                Quando: {event.date} {event.hour}
              </p>
              <p>Duração: {event.duration}</p>
              <div className="button">
                <Button onClick={() => deleteEvent(event.id)}>Remover</Button>
              </div>
            </div>
          </Event>
        ))}
      </CardEvents>
    </Container>
  );
};

export default DashboardInstitution;
