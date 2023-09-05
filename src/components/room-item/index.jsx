import React, { memo } from 'react'
import RoomItemWrapper from './style'

const RoomItem = memo((props) => {
  const { roomItem, width } = props

  return (
    <RoomItemWrapper style={{width}}>
      {roomItem && (
        <>
          <div className="img-wrapper">
            <img src={roomItem.picture_url} alt={roomItem.name} />
          </div>
          <div className="desc">{roomItem.verify_info.messages?.join(' · ')}</div>
          <div className="name">{roomItem.name}</div>
          <p className="price">¥{roomItem.price}</p>
          <div className="stars">⭐⭐⭐⭐⭐</div>
        </>
      )}
    </RoomItemWrapper>
  )
})

export default RoomItem
