import React, { memo } from 'react'
import HeaderWrapper from './style'
import HeaderLeft from './components/header-left';
import HeaderMain from './components/header-main';
import HeaderRight from './components/header-right';

const index = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderMain />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default index