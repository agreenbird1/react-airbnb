import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  getRecommendListAction,
  getHighScoreList,
  getDiscountList,
  getHotList,
  getLongForList
} from '@/store/modules/home'
import HomeRecommend from './components/home-recommend/index'
import HomeDiscount from './components/home-discount/index'
import HomeLongFor from './components/home-long-for/index'
import HomeWrapper from './style'

const index = memo((props) => {
  // shallowEqual 只有在 recommendList 发生变化时才会触发
  const recommendList = useSelector(
    (state) => state.home.recommendList,
    shallowEqual
  )
  const highScoreList = useSelector(
    (state) => state.home.highScoreList,
    shallowEqual
  )
  const discountList = useSelector(
    (state) => state.home.discountList,
    shallowEqual
  )
  const hotList = useSelector(
    (state) => state.home.hotList,
    shallowEqual
  )
  const longForList = useSelector(
    (state) => state.home.longForList,
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommendListAction())
    dispatch(getHighScoreList())
    dispatch(getDiscountList())
    dispatch(getHotList())
    dispatch(getLongForList())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeRecommend recommendList={recommendList} />
      <HomeRecommend recommendList={highScoreList} />
      <HomeDiscount discountList={discountList} />
      <HomeDiscount discountList={hotList} />
      <HomeLongFor list={longForList} />
    </HomeWrapper>
  )
})

export default index
