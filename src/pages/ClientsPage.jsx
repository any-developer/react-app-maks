import React from 'react'
import { useState, useEffect } from 'react'
import { API_URL } from '../config'
import TitleClient from '../components/TitleClient'
import CardClients from '../components/CardClients'


export default function ClientsPage() {

    const [isLoading, setIsLoading] = useState(true)
    const [clients, setClients] = useState(null)

    useEffect(() => {
        fetch(`${API_URL}/clients`,
            {
                metod: 'GET',
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                let data = response
                console.log(data)
                setClients(data)
                setIsLoading(false)
            })
    }, []) 

    return (
        <div>
            <TitleClient />
            <div className="container">
            <div className="row"> 
                {isLoading ? 'Loading...' : clients.map(client => <CardClients key={client.id} client={client} />)}
            </div>
            </div> 
        </div>
    )
}

