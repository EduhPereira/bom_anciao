import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Container, Contents, Describe } from './styles'

interface eventProps {
    event: {
        date: string,
        duration: string,
        name: string,
        hour: string,
        local: string,
        describe: string
    }

    instituteName: string
}

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

export const EventListUser = ({ event, instituteName }: eventProps) => {


    const { name, local, date, duration, hour, describe } = event

    return (
        <Container>
            <Contents>
                <h4 className="Title">{instituteName}</h4>
                <p>Local: {local}</p>
                <p>Quando: {date} às {hour}</p>
                <p>Duração: {duration}</p>
                <p>Atividade: {name}</p>
            </Contents>

            <Describe>
                <h4 className="Title">Descrição</h4>
                <p>{describe}</p>

            </Describe>

        </Container>


    )
}