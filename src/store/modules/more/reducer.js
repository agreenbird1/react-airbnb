import * as actionTypes from './constants'

const initialState = {
  currentPage: 0,
  roomList: [],
  totalCount: 0,
}

const moreReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANG_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionTypes.CHANG_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case actionTypes.CHANG_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    default:
      return state
  }
}

export default moreReducer
