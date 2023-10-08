import React, { useCallback } from 'react'
import MoreRoomsWrapper from './style'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailRoomItem } from '@/store/modules/detail'

function MoreRooms() {
  const { roomList, isLoading } = useSelector(
    (state) => ({
      roomList: state.more.roomList,
      isLoading: state.more.isLoading,
    }),
    shallowEqual
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const roomItemClick = useCallback(
    (roomItem) => {
      dispatch(changeDetailRoomItem(roomItem))
      navigate('/detail')
    },
    [navigate, dispatch]
  )
  return (
    <MoreRoomsWrapper>
      {roomList.map((item) => (
        <RoomItem
          key={item._id}
          roomItem={item}
          roomItemClick={roomItemClick}
          width="calc(25% - 20px)"
        />
      ))}
      {isLoading && <div className="mask"></div>}
    </MoreRoomsWrapper>
  )
}

export default MoreRooms
