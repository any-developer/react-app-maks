import React, { useState, useEffect } from 'react'
import { API_URL } from '../config'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


export const Licenses = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState(null)

  const handleDragStart = (e) => e.preventDefault()
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1440: { items: 3 },
  }

  useEffect(() => {
    fetch(`${API_URL}/licenses`,
      {
        metod: 'GET',
        headers: {
          'Accept': 'Application/json'
        }
      })
      .then(res => res.json())
      .then(response => {
        let data = response.licensesImage
        setItems(data)
        setIsLoading(false)
      })
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    return 'Loading...'
  }
  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      disableButtonsControls={true}
    >
      { items.map((item, i) => <div key={i} ><img src={`${API_URL}` + item.formats.small.url} onDragStart={handleDragStart} className="item" alt="licenses" /></div>)}
    </AliceCarousel>
  )
}
