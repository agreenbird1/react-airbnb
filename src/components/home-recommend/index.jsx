import React, { memo } from 'react'
import RecommendWrapper from './style'
import RoomItem from './../room-item/index'

const HomeRecommend = memo((props) => {
  const { title, desc, list } = props.recommendList

  return (
    <RecommendWrapper>
      <h2>{title}</h2>
      {desc && <p className="desc">recommend 描述罢了</p>}
      <ul className='room-list'>
        {list?.slice(0, 8).map((item) => (
          <RoomItem key={item.id} roomItem={item} width="calc(25% - 20px)" />
        ))}
      </ul>
    </RecommendWrapper>
  )
})

export default HomeRecommend
