import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddEvents } from "../../Providers/Events-Institution";
import { useAuthInstitution } from "../../Providers/Institution-Provider";
import {
  Container,
  Forms,
  Input,
  ButtonSave,
  ButtonCancel,
  TextArea,
  EventTitle,
  Content,
} from "./style";
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

interface IAddEventsProps {
  nameInst: any;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  modalVisible: boolean;
  loadEvents: () => void;
}

const AddEvents = ({
  nameInst,
  setModalVisible,
  modalVisible,
  loadEvents,
}: IAddEventsProps) => {
  const { CreateEvent } = useAddEvents();
  const { token } = useAuthInstitution();
  const showMenu = () => {
    setModalVisible(false);
  };

  const Schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório."),
    local: yup.string().required("Campo obrigatório."),
    date: yup.string().required("Campo obrigatório."),
    hour: yup.string().required("Campo obrigatório."),
    duration: yup.string().required("Campo obrigatório."),
    describe: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const handleOnSubmit: SubmitHandler<inputData> = (data: inputData) => {
    const nameFinder = nameInst.map((elem: any) => elem.name);
    const nameInstitution = nameFinder.join();
    CreateEvent(data, nameInstitution);
    setModalVisible(false);
    loadEvents();
    reset();
  };

  const closeModal = () => {
    setModalVisible(false);
    reset();
  };
  return (
    <Container visible={modalVisible}>
      <Content visible={modalVisible}>
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
              Salvar
            </ButtonSave>
          </div>
        </Forms>
      </Content>
    </Container>
  );
};
export default AddEvents;
