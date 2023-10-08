import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import IndicatorsWrapper from './style'

function Indicators(props) {
  const { selectIndex } = props
  const contentRef = useRef()

  useEffect(() => {
    const crtItem = contentRef.current.children[selectIndex]
    const crtItemOffsetLeft = crtItem.offsetLeft
    const crtItemWidth = crtItem.clientWidth
    const contentWidth = contentRef.current.clientWidth
    const totalWidth = contentRef.current.scrollWidth
    const maxMoveDistance = totalWidth - contentWidth
    let moveDistance = crtItemOffsetLeft + crtItemWidth / 2 - contentWidth / 2
    // 当最左边和最右边时不需要移动，只需要靠边
    // 左侧 最小可移动距离
    if (moveDistance < 0) moveDistance = 0
    // 右侧 最大可移动距离
    if (moveDistance > maxMoveDistance) moveDistance = maxMoveDistance
    contentRef.current.style.transform = `translateX(${-moveDistance}px)`
  }, [selectIndex])

  return (
    <IndicatorsWrapper>
      <div ref={contentRef} className="i-content">
        {props.children}
      </div>
    </IndicatorsWrapper>
  )
}

Indicators.propTypes = {
  selectIndex: PropTypes.number,
}

export default Indicators
