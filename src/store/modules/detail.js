const { createSlice } = require('@reduxjs/toolkit')

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    roomItem: {},
  },
  reducers: {
    changeDetailRoomItem(state, action) {
      state.roomItem = action.payload
    }
  }
})

export const { changeDetailRoomItem } = detailSlice.actions
export default detailSlice.reducer
