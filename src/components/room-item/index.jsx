import React, { memo } from 'react'
import RoomItemWrapper from './style'
import Rating from '@material-ui/lab/Rating'

const RoomItem = memo((props) => {
  const { roomItem, width } = props
  return (
    <RoomItemWrapper style={{ width }}>
      {roomItem && (
        <>
          <div className="img-wrapper">
            <img src={roomItem.picture_url} alt='' />
          </div>
          <div className="desc">
            {roomItem.verify_info.messages?.join(' · ')}
          </div>
          <div className="name">{roomItem.name}</div>
          <p className="price">¥{roomItem.price}</p>
          <div className="rating">
            <div>
              <Rating
                name="read-only"
                value={roomItem.star_rating ?? 5}
                readOnly
                precision={0.5}
                size="small"
                sx={{ fontSize: '12px' }}
              />
            </div>
            <span>{roomItem.reviews_count}</span>
            <span>{roomItem.bottom_info?.content}</span>
          </div>
        </>
      )}
    </RoomItemWrapper>
  )
})

export default RoomItem
