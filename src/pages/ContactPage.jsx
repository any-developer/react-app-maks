import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'
import TitleContact from '../components/TitleContact'

export default function ContactPage() {
  return (
    <>
      <TitleContact />
      <div className="row">
        <div className="col s12 m6">
          <div className='yndex-map'>
            <YMaps>
              <div>
                <Map
                  width={"100%"}
                  height={"100vh"}
                  defaultState={{ center: [55.75, 37.57], zoom: 16 }} />
              </div>
            </YMaps>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="contact mt-1"></div>
          <h5>ЗАО "НПЦ "МАКС"</h5>
          <p>Aдрес: 117437, Москва, ул. Профсоюзная, д. 108</p>
          <p>Телефон: + 7(495)123 63 70</p>
          <p>e-mail: info@npcmax.ru</p>
        </div>
      </div>
    </>

  )
}
