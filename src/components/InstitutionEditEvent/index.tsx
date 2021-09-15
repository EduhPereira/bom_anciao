import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import api from "../../services/api";
import {
  Container,
  Forms,
  Input,
  ButtonSave,
  ButtonCancel,
  TextArea,
  EventTitle,
  Content,
} from "./styles";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

interface inputData {
  nameInstitution: string;
  idInstitution: string;
  local: string;
  date: string;
  hour: string;
  duration: string;
  name: string;
  describe: string;
  id: number;
}

interface IEditEventsProps {
  nameInst: any;
  setModalAtt: Dispatch<SetStateAction<boolean>>;
  modalAtt: boolean;
  loadEvents: () => void;
  id: number;
}

const EditEvents = ({
  nameInst,
  setModalAtt,
  modalAtt,
  loadEvents,
  id,
}: IEditEventsProps) => {
  const { token } = useAuthInstitution();
  const [resposta, setResposta] = useState<inputData[]>([] as inputData[]);

  const institutionID =
    localStorage.getItem("@Bom ancião: institutionID") || "";

  const Schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório."),
    local: yup.string().required("Campo obrigatório."),
    date: yup.string().required("Campo obrigatório."),
    hour: yup.string().required("Campo obrigatório."),
    duration: yup.string().required("Campo obrigatório."),
    describe: yup.string(),
  });

  const getOneEvent = async (id: number) => {
    const response = await api.get(`/events/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const res = response.data;
    setResposta([res]);
  };

  const eventUpdate = async (data: inputData) => {
    const { name, local, describe, duration, hour, date } = data;
    const response = await api.patch(
      `events/${id}`,
      {
        nameInstitution: nameInst,
        local,
        date,
        hour,
        duration,
        name,
        idInstitution: institutionID,
        describe,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("✅ Evento alterado com sucesso!");
    console.log(response);
    loadEvents();
    setModalAtt(false);
  };

  useEffect(() => {
    getOneEvent(id);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const showMenu = () => {
    setModalAtt(false);
  };

  const closeModal = () => {
    setModalAtt(false);
    reset();
  };

  return (
    <Container visible={modalAtt}>
      <Content visible={modalAtt}>
        <AiOutlineClose className="Close" onClick={showMenu} />
        <EventTitle>
          <h2>Atualizar Evento</h2>
        </EventTitle>
        {resposta.map((evento) => (
          <Forms onSubmit={handleSubmit(eventUpdate)}>
            <p>
              Nome evento: <span>{errors.name && errors.name?.message}</span>
            </p>

            <Input
              data-testid="name-field"
              type="text"
              placeholder={evento.name}
              {...register("name")}
            />
            <p>
              Local <span>{errors.local && errors.local?.message}</span>
            </p>

            <Input
              data-testid="local-field"
              type="text"
              placeholder={evento.local}
              {...register("local")}
            />
            <p>
              Data <span>{errors.date && errors.date?.message}</span>
            </p>

            <Input
              data-testid="date-field"
              type="date"
              placeholder={evento.date}
              {...register("date")}
            />
            <p>
              Hora <span>{errors.hour && errors.hour?.message}</span>
            </p>

            <Input
              data-testid="hour-field"
              type="time"
              placeholder={evento.hour}
              {...register("hour")}
            />
            <p>
              Duração <span>{errors.duration && errors.duration?.message}</span>
            </p>

            <Input
              data-testid="duration-field"
              type="text"
              placeholder={evento.duration}
              {...register("duration")}
            />
            <p>Descrição</p>
            <span>{errors.describe && errors.describe?.message}</span>
            <TextArea
              data-testid="describe-field"
              placeholder={evento.describe}
              {...register("describe")}
            />
            <div className="btn-div">
              <ButtonCancel onClick={closeModal} type="button">
                Cancelar
              </ButtonCancel>
              <ButtonSave data-testid="form-button" type="submit">
                Atualizar
              </ButtonSave>
            </div>
          </Forms>
        ))}
      </Content>
    </Container>
  );
};
export default EditEvents;
