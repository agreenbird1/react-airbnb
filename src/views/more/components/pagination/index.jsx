import React from 'react'
import MorePaginationWrapper from './style'
import Pagination from '@material-ui/lab/Pagination'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { changeCurrentPageAction } from './../../../../store/modules/more/createActions';
import { getMoreRoomListAction } from '@/store/modules/more/createActions';

function MorePagination() {
  const totalCount = useSelector((state) => state.more.totalCount, shallowEqual)
  const dispatch = useDispatch()
  const changeCurrentPage = (e, page) => {
    window.scrollTo({
      top: 0,
    })
    dispatch(changeCurrentPageAction(page))
    dispatch(getMoreRoomListAction())
  }
  return (
    <MorePaginationWrapper>
      <Pagination
        onChange={changeCurrentPage}
        count={Math.ceil(totalCount / 20)}
      />
    </MorePaginationWrapper>
  )
}

export default MorePagination
