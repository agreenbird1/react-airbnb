import { getHomeRecommendList } from '@/services/home'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

// thunk 就是异步 action ，这里是使用的 redux/toolkit 内置 createAsyncThunk
export const getRecommendListAction = createAsyncThunk(
  'home/getRecommendList',
  async (...args) => {
    // 参数中可以控制异步请求，比如 abort、rejectWithValue - 返回错误值
    // console.log(args)
    const res = await getHomeRecommendList()
    return res
  }
)

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
  extraReducers: (builder) => {
    builder.addCase(getRecommendListAction.fulfilled, (state, action) => {
      state.recommendList = action.payload
    })
  },
  // 即将被弃用的写法
  // extraReducers: {
  //   [getRecommendListAction.fulfilled]: (state, action) => {
  //     state.recommendList = action.payload
  //   },
  // },
})

export const { changeRecommendList } = homeSlice.actions

export default homeSlice.reducer
