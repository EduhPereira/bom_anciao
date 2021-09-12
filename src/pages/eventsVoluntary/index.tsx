import { useEffect, useState } from "react"
import { EventListUser } from "../../components/eventListUser"
import VoluntaryMenu from "../../components/voluntaryMenu"
import api from "../../services/api"
import { Container, Contents } from "./styles"
import {useLogin} from '../../Providers/Login-Voluntaries'
import { BiMenuAltLeft } from 'react-icons/bi'

interface iEventUser {
    id: number,
    idEvent: number,
    idInstitution: number,
    idUser: number,
    nameInstitution: string

    event: {
        date: string,
        duration: string,
        name: string,
        hour: string,
        local: string,
        describe: string
    }
}

interface iInstitute {
    id: number,
}
interface iUserName{
    name: string
}


export const EventsVoluntary = () => {

    const {token, userId} = useLogin()

    useEffect(() => {
        reqEventUser()
        reqInstitutionId()
        reqUserName()
    }, [])

    const reqInstitutionId = async () => {
        const response = await api.get("/users?type=Institution", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setInstitutionId(response.data)
    }

    const reqUserName = async () => {
        const response = await api.get(`/users?id=${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setUseName(response.data)
    }


    const reqEventUser = async () => {
        const response = await api.get(`/subscribeEvents?idUser=${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setUserEvents(response.data)
    }

    const showMenu = () => {
        setVisible(true)
    }



    const [eventsUser, setUserEvents] = useState<iEventUser[]>([] as iEventUser[])
    const [institutionId, setInstitutionId] = useState<iInstitute[]>([] as iInstitute[])
    const [visible, setVisible] = useState(false)
    const [userName, setUseName] = useState<iUserName[]>([] as iUserName[])

    console.log(institutionId)
    console.log(eventsUser)
    console.log(userName)

    return (
        <Container>
            <VoluntaryMenu visible={visible} setVisible={setVisible}/>
            <BiMenuAltLeft className="Open" onClick={showMenu} />
            <Contents>
                

                {userName.map((user)=>{
                    return<>
                        <h4>Seja bem vindo {user.name}</h4>
                    </>
                })}

                <section className="Card">
                    <h2>Meus Eventos</h2>
                    {eventsUser.map((e, index) => {
                        return <section className="Event">
                            <EventListUser key={index} event={e.event} instituteName={e.nameInstitution}/>
                        </section>
                    })}
                </section>

            </Contents>
        </Container>
    )
}