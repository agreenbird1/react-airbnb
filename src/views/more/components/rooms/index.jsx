import React from 'react'
import MoreRoomsWrapper from './style'
import { useSelector, shallowEqual } from 'react-redux'
import RoomItem from '@/components/room-item'

function MoreRooms() {
  const { roomList, isLoading } = useSelector((state) => ({
    roomList: state.more.roomList,
    isLoading: state.more.isLoading,
  }), shallowEqual)
  return (
    <MoreRoomsWrapper>
      {roomList.map((item) => (
        <RoomItem key={item._id} roomItem={item} width="calc(25% - 20px)" />
      ))}
      {isLoading && <div className="mask"></div>}
    </MoreRoomsWrapper>
  )
}

export default MoreRooms
