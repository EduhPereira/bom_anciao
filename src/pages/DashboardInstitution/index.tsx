import { useEffect, useState } from "react";
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
  id?: number;
  idInstitution?: number;
}

const DashboardInstitution = () => {
  const [events, setEvents] = useState<Event[]>([] as Event[]);

  async function loadEvents() {
    const response = await api.get("/events");

    const data = response.data;

    setEvents(data);
    console.log(data);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <Container>
      {events.map((event) => (
        <h2>{event.nameInstitution}</h2>
      ))}
      <CardEvents>
        <TitleEvent>
          <h2>Eventos e atividades</h2>
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
                <Button>Remover</Button>
              </div>
            </div>
          </Event>
        ))}
      </CardEvents>
    </Container>
  );
};

export default DashboardInstitution;
