import React from 'react'
import MoreRoomsWrapper from './style'
import { useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'

function MoreRooms() {
  const { roomList } = useSelector((state) => ({
    roomList: state.more.roomList,
  }))
  console.log(roomList);
  return <MoreRoomsWrapper>
    {
      roomList.map((item) => (
        <RoomItem key={item.id} roomItem={item} width="calc(25% - 20px)" />
      ))
    }
  </MoreRoomsWrapper>
}

export default MoreRooms
