import React, { memo } from 'react'
import MoreWrapper from './style';
import MoreFilter from './components/filter/index';
import MoreRooms from './components/rooms/index';
import MorePagination from './components/pagination/index';

const index = memo((props) => {
  return (
    <MoreWrapper>
      <MoreFilter></MoreFilter>
      <MoreRooms></MoreRooms>
      <MorePagination></MorePagination>
    </MoreWrapper>
  )
})


export default index