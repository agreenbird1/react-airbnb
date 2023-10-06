import * as actionTypes from './constants'
import { getMoreRoomList } from './../../../services/more'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANG_CURRENT_PAGE,
  currentPage,
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANG_ROOM_LIST,
  roomList,
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANG_TOTAL_COUNT,
  totalCount,
})

export const getMoreRoomListAction = () => {
  return (dispatch, getState) => {
    const currentPage = getState().more.currentPage
    getMoreRoomList(currentPage * 20).then((res) => {
      const { list, totalCount } = res
      dispatch(changeRoomListAction(list))
      dispatch(changeTotalCountAction(totalCount))
    })
  }
}
