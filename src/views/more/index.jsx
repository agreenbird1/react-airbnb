import React, { memo, useEffect } from 'react'
import MoreWrapper from './style'
import MoreFilter from './components/filter/index'
import MoreRooms from './components/rooms/index'
import MorePagination from './components/pagination/index'
import { useDispatch } from 'react-redux';
import { getMoreRoomListAction } from '@/store/modules/more/createActions'

const index = memo((props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMoreRoomListAction())
  }, [dispatch])
  return (
    <MoreWrapper>
      <MoreFilter></MoreFilter>
      <MoreRooms></MoreRooms>
      <MorePagination></MorePagination>
    </MoreWrapper>
  )
})

export default index
