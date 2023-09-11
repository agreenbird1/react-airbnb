import {
  getHomeRecommendList,
  getHomeHighScoreList,
  getHomeDiscountList,
  getHomeHot
} from '@/services/home'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

// thunk 就是异步 action ，这里是使用的 redux/toolkit 内置 createAsyncThunk
export const getRecommendListAction = createAsyncThunk(
  'home/getRecommendList',
  async (...args) => {
    // 参数中可以控制异步请求，比如 abort、rejectWithValue，dispatch等 - 返回错误值
    // console.log(args)
    // 如果是同步的简单thunk处理，可以直接在此处使用dispatch，异步的建议在extraReducer中处理
    const res = await getHomeRecommendList()
    return res
  }
)

export const getHighScoreList = createAsyncThunk(
  'home/getHighScoreList',
  async () => {
    const res = await getHomeHighScoreList()
    return res
  }
)

export const getDiscountList = createAsyncThunk(
  'home/getDiscountList',
  async () => {
    const res = await getHomeDiscountList()
    return res
  }
)

export const getHotList = createAsyncThunk(
  'home/getHotList',
  async () => {
    const res = await getHomeHot()
    return res
  }

)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    recommendList: {},
    highScoreList: {},
    discountList: {},
    hotList: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendListAction.fulfilled, (state, action) => {
        state.recommendList = action.payload
      })
      .addCase(getHighScoreList.fulfilled, (state, action) => {
        state.highScoreList = action.payload
      })
      .addCase(getDiscountList.fulfilled, (state, action) => {
        state.discountList = action.payload
      })
      .addCase(getHotList.fulfilled, (state, action) => {
        state.hotList = action.payload
      })
  },
  // 即将被弃用的写法
  // extraReducers: {
  //   [getRecommendListAction.fulfilled]: (state, action) => {
  //     state.recommendList = action.payload
  //   },
  // },
})

export default homeSlice.reducer
