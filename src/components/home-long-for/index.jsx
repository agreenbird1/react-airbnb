import React, { memo } from 'react'
import HomeLongForWrapper from './style.js'

const HomeLongFor = memo((props) => {
  const { list, title, subtitle } = props.list
  console.log(list)
  return (
    <HomeLongForWrapper>
      <h2 className="long-for-title">{title}</h2>
      <p className="long-for-desc">{subtitle}</p>
      <div className="long-for-list-wrapper">
        <ul className="long-for-list">
          {list &&
            list.map((item) => (
              <li key={item.image_url} className="long-for-item">
                <img src={item.picture_url} alt={item.city} />
                <div className="city-name">{item.city}</div>
                <div className="city-price">均价 {item.price}</div>
              </li>
            ))}
        </ul>
      </div>
    </HomeLongForWrapper>
  )
})

export default HomeLongFor
