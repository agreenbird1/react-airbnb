import * as actionTypes from './constants'
import { getMoreRoomList } from './../../../services/more'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
})

export const getMoreRoomListAction = () => {
  return (dispatch, getState) => {
    const currentPage = getState().more.currentPage
    dispatch(changeIsLoadingAction(true))
    getMoreRoomList(currentPage * 20).then((res) => {
      const { list, totalCount } = res
      dispatch(changeRoomListAction(list))
      dispatch(changeTotalCountAction(totalCount))
      dispatch(changeIsLoadingAction(false))
    })
  }
}
