import React, { memo, useState, useCallback, shallowEqual } from 'react'
import { useSelector } from 'react-redux'
import DetailWrapper from './style'
import ImgBrowser from './../../components/img-browser/index'

const Detail = memo((props) => {
  const { picture_urls } = useSelector(
    (state) => state.detail.roomItem,
    shallowEqual
  )
  const [showImgBrowser, setShowImgBrowser] = useState(false)
  const exitFunction = useCallback(() => {
    setShowImgBrowser(false)
  }, [])
  return (
    <DetailWrapper>
      <div className="left img-wrapper">
        <img
          src={picture_urls[0]}
          onClick={() => setShowImgBrowser(true)}
          alt=""
          draggable="false"
        />
      </div>
      <div className="right">
        {picture_urls.slice(1, 5).map((item, index) => (
          <div className="img-wrapper" key={index}>
            <img
              src={item}
              alt=""
              onClick={() => setShowImgBrowser(true)}
              draggable="false"
            />
          </div>
        ))}
      </div>

      {showImgBrowser && (
        <ImgBrowser
          picture_urls={picture_urls}
          exitFunction={exitFunction}
        ></ImgBrowser>
      )}
    </DetailWrapper>
  )
})

export default Detail
