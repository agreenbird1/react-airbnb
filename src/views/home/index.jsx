import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getRecommendListAction, getHighScoreList } from '@/store/modules/home'
import HomeRecommend from './../../components/home-recommend/index'
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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommendListAction())
    dispatch(getHighScoreList())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeRecommend recommendList={recommendList} />
      <HomeRecommend recommendList={highScoreList} />
    </HomeWrapper>
  )
})

export default index
