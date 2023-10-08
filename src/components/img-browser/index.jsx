import React, { memo, useEffect, useState } from 'react'
import ImgBrowserWrapper from './style'
import classnames from 'classnames'
import Indicators from '../indicators'

const ImgBrowser = memo(({ picture_urls, exitFunction }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    // 图片组件展开时候，隐藏滚动条
    document.body.style.setProperty('overflow', 'hidden')
    return () => {
      // 图片组件收起时候，显示滚动条
      // useEffect 返回的函数会在组件卸载时执行
      document.body.style.setProperty('overflow', 'auto')
    }
  }, [])
  return (
    <ImgBrowserWrapper>
      <div className="exit" onClick={() => exitFunction && exitFunction()}>
        <iconpark-icon name="x-close"></iconpark-icon>
      </div>
      <div className="img-wrapper">
        <div
          onClick={() =>
            setActiveIndex(
              activeIndex === 0 ? picture_urls.length - 1 : activeIndex - 1
            )
          }
          className="left-button"
        >
          <iconpark-icon name="ChevronLeft"></iconpark-icon>
        </div>
        <div className="img">
          {picture_urls.map((item, index) => (
            <img
              src={item}
              key={item}
              alt=""
              draggable="false"
              className={classnames({ active: activeIndex === index })}
            />
          ))}
        </div>
        <div
          onClick={() =>
            setActiveIndex(
              activeIndex === picture_urls.length - 1 ? 0 : activeIndex + 1
            )
          }
          className="right-button"
        >
          <iconpark-icon name="ChevronRight"></iconpark-icon>
        </div>
      </div>
      <div className="indicators-wrapper">
        <Indicators selectIndex={activeIndex}>
          {picture_urls.map((item, index) => (
            <img
              src={item}
              key={item}
              alt=""
              draggable="false"
              className={classnames({ active: activeIndex === index })}
            />
          ))}
        </Indicators>
      </div>
    </ImgBrowserWrapper>
  )
})

export default ImgBrowser
