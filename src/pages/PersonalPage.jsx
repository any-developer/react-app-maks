import React, { useContext } from 'react'
import { AuhtContext } from '../context/AuhtContext'
import TitlePersonal from '../components/TitlePersonal'

export default function PersonalPage() {

    const auth = useContext(AuhtContext)


    return (
        <>
        <TitlePersonal />
        <div className="container">
            <div className="row">
                <div className="col s12">
                     <p className="mt-1">Добрый день, {auth.userId}, для Вас пока нет дополнительной информации</p>
                </div>
            </div>
        </div>
        
        </>
    )
}
