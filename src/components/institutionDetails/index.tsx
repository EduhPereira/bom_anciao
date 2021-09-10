import { useEffect, useState } from "react"
import api from "../../services/api"
import ProgressBar from '@ramonak/react-progress-bar'

interface iEvents{
    date: string,
    describe: string,
    duration: string,
    name: string,
    nameInstitution: string
    local: string
    hour: string
    idInstitution: number,
    id: number
}

interface iDonations{
    name: string,
    quantity: number,
    received: number
}

export const InstitutionDetails = () => {

    useEffect(()=>{
        reqInstitutionEvents()
        reqDonationsInstitution()
    },[])

    const reqInstitutionEvents = async () => {
        const response = await api.get('events?idInstitution=1')
        setListEvents(response.data)
    }

    const reqDonationsInstitution = async () => {
        const response = await api.get("donations?idInstitution=1")
        setListDonations(response.data)
    }


    const [listEvents, setListEvents] = useState<iEvents[]>([] as iEvents[])
    const [listDonations, setListDonations] = useState<iDonations[]>([] as iDonations[])

    console.log(listDonations)

    return (
        <div>
            <h1>Eventos</h1>
            {listEvents.map((event)=>{
                return<section>
                    <p>Local: {event.local}</p>
                    <p>Quando: {event.date} às {event.hour}</p>
                    <p>Duração: {event.duration}</p>
                    <p>Atividade: {event.name}</p>
                    <button>Participar</button>
                </section>
            })}

            <br/>
            <br/>

            <h1>Doações</h1>
            {listDonations.map((donation)=>{
                return<section>
                    <p><span>{donation.quantity}</span> {donation.name}</p>
                    <ProgressBar width={'200px'} completed={(donation.received*100/donation.quantity).toFixed(0)}/>
                    
                </section>
            })}

        </div>
    )
}