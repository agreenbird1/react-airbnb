import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import RecommendWrapper from './style'
import RoomItem from '@/components/room-item/index'

const HomeRecommend = memo((props) => {
  const { title, desc, list } = props.recommendList
  const navigate = useNavigate()
  return (
    <RecommendWrapper>
      <h2>{title}</h2>
      {desc && <p className="desc">recommend 描述罢了</p>}
      <ul className='room-list'>
        {list?.slice(0, 8).map((item) => (
          <RoomItem key={item.id} roomItem={item} width="calc(25% - 20px)" />
        ))}
      </ul>
      <div className="show-all" onClick={() => navigate('/more')}>查看全部 &gt;</div>
    </RecommendWrapper>
  )
})

export default HomeRecommend
