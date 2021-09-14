import { Suspense, useEffect, useState, Dispatch, SetStateAction } from "react"
import api from "../../services/api"
import ProgressBar from '@ramonak/react-progress-bar'
import { useParams } from "react-router"
import { useLogin } from "../../Providers/Login-Voluntaries"
import { Container, Contents } from './styles'
import VoluntaryMenu from "../../components/voluntaryMenu"
import { BiMenuAltLeft } from 'react-icons/bi'

interface iEvents {
  date: string;
  describe: string;
  duration: string;
  name: string;
  nameInstitution: string;
  local: string;
  hour: string;
  idInstitution: number;
  id: number;
}

interface iDonations {
  name: string;
  quantity: number;
  received: number;
}

interface iInstitution {
  about: string;
  address: string;
  city: string;
  name: string;
  cnpj: string;
}

interface iSubscribe {
  idInstitution: number;
  nameInstitution: string;
  idUser: number;
  idEvent: number;
  event: {
    local: string;
    date: string;
    hour: string;
    duration: string;
    name: string;
    describe: string;
  };
}

interface iParams {
  id: string;
}

interface iVisible {
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>
}

export const InstitutionDetails = () => {

    const { id } = useParams<iParams>()
    const { userId, userToken: token } = useLogin()

    useEffect(() => {
        reqInstitutionEvents()
        reqDonationsInstitution()
        reqInstitution()
        reqVerifyIdUser()
    }, [])

    const reqInstitutionEvents = async () => {
        const response = await api.get(`events?idInstitution=${id}`)
        setListEvents(response.data)
    }

    const reqInstitution = async () => {
        const response = await api.get(`users?type=Institution&&id=${id}`)
        setInstitution(response.data)
    }

    const reqDonationsInstitution = async () => {
        const response = await api.get(`donations?idInstitution=${id}`)
        setListDonations(response.data)
    }

    const reqVerifyIdUser = async () => {
        const response = await api.get(`subscribeEvents?idUser=${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        setVerifyUserSubscribe(response.data)
    }

    const reqSubscribeEvent = async (event: iEvents) => {
        const { nameInstitution, idInstitution, id, name, local, date, hour, duration, describe } = event
        const response = await api.post("subscribeEvents", {
            idInstitution,
            nameInstitution,
            idUser: userId,
            idEvent: id,
            event: {
                local,
                date,
                hour,
                duration,
                name,
                describe
            },

        }, {
            headers: {

                Authorization: `Bearer ${token}`,
            },
        })
    }

    const reqUnsubscribe = async (id: number) => {
        const response = await api.delete(`subscribeEvents/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        console.log(response.data)
    }

    const showMenu = () => {
        setVisible(true)
    }

    const [listEvents, setListEvents] = useState<iEvents[]>([] as iEvents[])
    const [listDonations, setListDonations] = useState<iDonations[]>([] as iDonations[])
    const [institution, setInstitution] = useState<iInstitution[]>([] as iInstitution[])
    const [verifyUserSubscribe, setVerifyUserSubscribe] = useState<iSubscribe[]>([] as iSubscribe[])
    const [visible, setVisible] = useState(false)
    console.log(listDonations)

    return (
        <Container>

            <VoluntaryMenu visible={visible} setVisible={setVisible} />
            <BiMenuAltLeft className="Open" onClick={showMenu} />

            <Contents>

                <div className="Name">{institution.map((i) => {
                    return <h1>{i.name}</h1>
                })}
                </div>

                <section>


                    <section className="Events">
                        <h1>Eventos</h1>
                        {listEvents.map((event) => {
                            return <section className="Events-details">
                                <h4>Atividade: {event.name}</h4>
                                <p>Quando: {event.date} às {event.hour}</p>
                                <p>Duração: {event.duration}</p>
                                <p>Local: {event.local}</p>
                                <h4>Descrição:</h4>
                                <p>{event.describe}</p>
                                <button onClick={() => reqSubscribeEvent(event)}>Participar</button>
                            </section>
                        })}
                    </section>

                    <section className="Donations">
                        <h1>Doações</h1>
                        {listDonations.map((donation) => {
                            return <section className="Donations-details">
                                <p className="Donations-title"><span>{donation.quantity}</span> {donation.name}</p>
                                <div className="ProgressBar">
                                    <ProgressBar bgColor={"#227475"} isLabelVisible={false} height={'15px'} width={'200px'} completed={(donation.received * 100 / donation.quantity).toFixed(0)} />
                                    <span>{(donation.received * 100 / donation.quantity).toFixed(0)}%</span>
                                </div>
                            </section>
                        })}


                        <section className="Contact">
                            <h1>Informações de contato:</h1>

                            {institution.map((i) => {
                                return <section className="Contact-details">
                                    <p>Endereço: {i.address}</p>
                                    <p>Localizado em {i.city}</p>
                                    <p>CNPJ {i.cnpj}</p>
                                    <p>Sobre nós: {i.about}</p>
                                </section>
                            })}

                        </section>

                    </section>



                </section>

            </Contents>


        </Container>
    )
}
