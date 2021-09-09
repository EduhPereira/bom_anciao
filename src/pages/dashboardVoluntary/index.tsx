import { useEffect, useState } from "react"
import { number } from "yup/lib/locale"
import { EventListUser } from "../../components/eventListUser"
import { api } from "../../services/api"

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
        local: string
    }
}

interface iInstitute{
    id: number,
}


export const DashboardVoluntary = () => {

    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbGFyZXNAbWFpbC5jb20iLCJpYXQiOjE2MzExOTI5NjQsImV4cCI6MTYzMTE5NjU2NCwic3ViIjoiNCJ9.pCGeTKOysrksuhVkXxnTN1wEERYk0VopnoTenUu9A-A"
    
    useEffect(() => {
        reqEventUser()
        reqInstitutionId()
    }, [])
    
    const reqInstitutionId = async () => {
        const response = await api.get("/users?type=Institution", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setInstitutionId(response.data)
    }
    
    
    const reqEventUser = async () => {
        const response = await api.get("/subscribeEvents?idUser=1", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setUserEvents(response.data)
    }

    
    
    const [eventsUser, setUserEvents] = useState<iEventUser[]>([] as iEventUser[])
    const [donations, setDonations] = useState([])
    const [institutionEvent, setInstitutionEvent] = useState([])
    const [institutionId, setInstitutionId] = useState<iInstitute[]>([] as iInstitute[])
    console.log(institutionId)
    console.log(eventsUser)
    
    return (
        <div>
            <h1>Seja bem vindo</h1>

            <div>
                <h1>Meus Eventos</h1>
                <section>
                    {eventsUser.map((e, index) => {
                        return <>
                            <h3>{e.nameInstitution}</h3>
                            <EventListUser key={index} event={e.event} />
                        </>
                    })}
                </section>
                
            </div>
        </div>
    )
}