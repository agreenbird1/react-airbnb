import React, { memo } from 'react'
import FooterWrapper from './style'

const index = memo(() => {
  const links = [
    {
      title: '客服支持',
      labels: [
        '帮助中心',
        '「AirCover 四海无忧」',
        '反歧视',
        '残障人士支持',
        '取消预订的选择',
        '举报邻里问题',
      ],
    },
    {
      title: '出租房源',
      labels: [
        '来爱彼迎发布房源',
        'AirCover 四海无忧（房东版）',
        '出租资源',
        '社区论坛',
        '负责任出租',
      ],
    },
    {
      title: '爱彼迎',
      labels: [
        '新闻',
        '新功能',
        '工作机会',
        '投资者',
        '礼品卡',
        'Airbnb 紧急住宿',
      ],
    },
  ]
  return (
    <FooterWrapper>
      <div className='links-wrapper'>
        {links.map((item, index) => {
          return (
            <div>
              <h3>{item.title}</h3>
              <ul>
                {item.labels.map((label, index) => {
                  return <li key={index}>{label}</li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <div className="rights">
        © 2023 Airbnb, Inc.
      </div>
    </FooterWrapper>
  )
})

export default index
