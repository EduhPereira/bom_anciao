import { useEffect, useState } from 'react'
import api from '../../services/api'

interface eventProps{
    event: {
        date: string,
        duration: string,
        name: string,
        hour: string,
        local: string
    }
}

export const EventListUser = ({event}: eventProps) => {



    

    const {name, local, date, duration, hour} = event

    return(
        <div>
            <p>Local: {local}</p>
            <p>Quando: {date} às {hour}</p>
            <p>Duração: {duration}</p>
            <p>Atividade: {name}</p>
        </div>
    )
}