import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddEvents } from "../../Providers/Events-Institution";
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
  const { CreateEvent } = useAddEvents();
  const { token } = useAuthInstitution();

  const Schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório."),
    local: yup.string().required("Campo obrigatório."),
    date: yup.string().required("Campo obrigatório."),
    hour: yup.string().required("Campo obrigatório."),
    duration: yup.string().required("Campo obrigatório."),
    describe: yup.string(),
  });

  const handleOnSubmit: SubmitHandler<inputData> = (data: inputData) => {
    const nameFinder = nameInst.map((elem: any) => elem.name);
    const nameInstitution = nameFinder.join();
    CreateEvent(data, nameInstitution);
    toast.success("Evento criado com sucesso!");
    setModalAtt(false);
    loadEvents();
  };

  const getOneEvent = async (id: number) => {
    const response = await api.get(`events/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  const eventUpdate = async (editEvent: inputData) => {
    const {
      nameInstitution,
      idInstitution,
      name,
      local,
      date,
      hour,
      duration,
      describe,
    } = editEvent;
    const response = await api
      .patch(
        `events/${id}`,
        {
          nameInstitution,
          idInstitution,
          name,
          local,
          date,
          hour,
          duration,
          describe,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => toast.success("✅ Evento alterado com sucesso!"));
    console.log(response);
    loadEvents();
    setModalAtt(true);
  };

  useEffect(() => {
    getOneEvent(id);
  }, [id]);

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
          <h2>Cadastrar Evento</h2>
        </EventTitle>
        <Forms onSubmit={handleSubmit(handleOnSubmit)}>
          <p>
            Nome evento <span>{errors.name && errors.name?.message}</span>
          </p>

          <Input data-testid="name-field" type="text" {...register("name")} />
          <p>
            Local <span>{errors.local && errors.local?.message}</span>
          </p>

          <Input data-testid="local-field" type="text" {...register("local")} />
          <p>
            Data <span>{errors.date && errors.date?.message}</span>
          </p>

          <Input data-testid="date-field" type="date" {...register("date")} />
          <p>
            Hora <span>{errors.hour && errors.hour?.message}</span>
          </p>

          <Input data-testid="hour-field" type="time" {...register("hour")} />
          <p>
            Duração <span>{errors.duration && errors.duration?.message}</span>
          </p>

          <Input
            data-testid="duration-field"
            type="text"
            {...register("duration")}
          />
          <p>Descrição</p>
          <span>{errors.describe && errors.describe?.message}</span>
          <TextArea data-testid="describe-field" {...register("describe")} />
          <div className="btn-div">
            <ButtonCancel onClick={closeModal} type="button">
              Cancelar
            </ButtonCancel>
            <ButtonSave data-testid="form-button" type="submit">
              Atualizar
            </ButtonSave>
          </div>
        </Forms>
      </Content>
    </Container>
  );
};
export default EditEvents;
