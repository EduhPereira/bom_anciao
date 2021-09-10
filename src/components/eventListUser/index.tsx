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


    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNvbGFyZXNAbWFpbC5jb20iLCJpYXQiOjE2MzExOTI5NjQsImV4cCI6MTYzMTE5NjU2NCwic3ViIjoiNCJ9.pCGeTKOysrksuhVkXxnTN1wEERYk0VopnoTenUu9A-A"

    

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