import React from 'react'
import serv1 from '../images/serv1.png'


export default function HomeCdx() {
    return (
        <section className="section-grey">
        <div className="container">
        <div className="row">
            <div className="col s12">
                <h2 classname="title">программно-определяемые</h2>
            </div>
            <div className="col s6">
                <h1 classname="title">СДХ</h1>
            </div>
            <div className="col s6">
                <p classname="title">Инфраструктура, в которой вычислительные мощности, хранилища, сети объединяются в одно целое с помощью программных средств, а управление ими происходит через общую консоль администрирования</p>
            </div>
            <div className="col s6">
                <div className="wraper-left">
                <img src={serv1} alt="alt" />
                </div>
            </div>
            <div className="col s6">
            <div className="wraper-right">
                <img src={serv1} alt="alt"/>
                </div>
            </div>
          </div> 
        </div>
       </section>

    )
}
