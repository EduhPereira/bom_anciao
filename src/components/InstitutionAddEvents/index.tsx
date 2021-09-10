import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddEvents } from "../../Providers/Events-Institution";
import { Container, Forms, Input, Button, TextArea, EventTitle } from "./style";

interface inputData {
  nameInstitution: string;
  idInstitution: string;
  local: string;
  date: string;
  hour: string;
  duration: string;
  name: string;
  describe: string;
}
// interface AddEventsProps {
//   nameInst: JSX.Element;
// }

const AddEvents = ({ nameInst }: any) => {
  const { CreateEvent } = useAddEvents();

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
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const handleOnSubmit: SubmitHandler<inputData> = (data: inputData) => {
    const nameFinder = nameInst.map((elem: any) => elem.name);
    const nameInstitution = nameFinder.join();
    CreateEvent(data, nameInstitution);
  };
  return (
    <Container>
      <EventTitle>
        <h2>Cadastrar Evento</h2>
      </EventTitle>
      <Forms onSubmit={handleSubmit(handleOnSubmit)}>
        <p>Nome evento</p>
        <span>{errors.name && errors.name?.message}</span>
        <Input type="text" {...register("name")} />
        <p>Local</p>
        <span>{errors.local && errors.local?.message}</span>
        <Input type="text" {...register("local")} />
        <p>Data</p>
        <span>{errors.date && errors.date?.message}</span>
        <Input type="text" {...register("date")} />
        <p>Hora</p>
        <span>{errors.hour && errors.hour?.message}</span>
        <Input type="text" {...register("hour")} />
        <p>Duração</p>
        <span>{errors.duration && errors.duration?.message}</span>
        <Input type="text" {...register("duration")} />
        <p>Descrição</p>
        <span>{errors.describe && errors.describe?.message}</span>
        <TextArea {...register("describe")} />
        <Button type="submit">Salvar</Button>
      </Forms>
    </Container>
  );
};
export default AddEvents;
