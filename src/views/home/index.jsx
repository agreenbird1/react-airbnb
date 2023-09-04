import { homeApi } from '@/services'
import { changeRecommendList } from '@/store/modules/home'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const index = memo((props) => {
  const recommendList = useSelector(
    (state) => state.home.recommendList,
    shallowEqual
  )
  const dispatch = useDispatch()

    homeApi.getHomeRecommendList().then((res) => {
      dispatch(changeRecommendList, res)
    })
  return <div>home</div>
})

export default index
