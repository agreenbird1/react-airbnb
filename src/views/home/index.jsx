import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getRecommendListAction } from '@/store/modules/home'
import HomeRecommend from './../../components/home-recommend/index'

const index = memo((props) => {
  // shallowEqual 只有在 recommendList 发生变化时才会触发
  const recommendList = useSelector(
    (state) => state.home.recommendList,
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRecommendListAction())
  }, [dispatch])

  return (
    <div>
      <HomeRecommend recommendList={recommendList} />
    </div>
  )
})

export default index
