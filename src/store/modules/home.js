const { createSlice } = require('@reduxjs/toolkit')

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    recommendList: {},
  },
  reducers: {
    changeRecommendList(state, action) {
      state.recommendList = action.payload
    },
  },
})

export const { changeRecommendList } = homeSlice.actions

export default homeSlice.reducer
