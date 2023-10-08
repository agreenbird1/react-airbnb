import React, { memo, useState } from 'react'
import RoomItemWrapper from './style'
import Rating from '@material-ui/lab/Rating'
import Indicators from './../indicators/index'
import classnames from 'classnames'

const RoomItem = memo((props) => {
  const { roomItem, width, roomItemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const toggleSelectIndex = (val, e) => {
    e.stopPropagation()
    let newIndex = selectIndex + val
    if (newIndex < 0) {
      newIndex = roomItem?.picture_urls?.length - 1
    }
    if (newIndex >= roomItem?.picture_urls?.length) {
      newIndex = 0
    }
    setSelectIndex(newIndex)
  }
  const handleRoomClick = (roomItem) => {
    roomItemClick && roomItemClick(roomItem)
  }
  return (
    <RoomItemWrapper style={{ width }} onClick={() => handleRoomClick(roomItem)}>
      {roomItem && (
        <>
          <div className="img-wrapper">
            <img src={roomItem.picture_url} alt="" />
            {roomItem?.picture_urls && (
              <>
                <span className="left">
                  <span onClick={(e) => toggleSelectIndex(-1, e)}>&lt;</span>
                </span>
                <span className="right">
                  <span onClick={(e) => toggleSelectIndex(1, e)}>&gt;</span>
                </span>
                <div className="indicators">
                  <Indicators selectIndex={selectIndex}>
                    {roomItem?.picture_urls?.map((url, index) => (
                      <div className="dot-wrapper" key={index}>
                        <span
                          className={classnames('dot', {
                            active: selectIndex === index,
                          })}
                        ></span>
                      </div>
                    ))}
                  </Indicators>
                </div>
              </>
            )}
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
