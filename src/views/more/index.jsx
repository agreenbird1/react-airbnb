import React, { memo } from 'react'
import MoreWrapper from './style';

const index = memo((props) => {
  return (
    <MoreWrapper>
      <section className='filter'>filter</section>
      <section className="list">list</section>
      <section className="pagination">pagination</section>
    </MoreWrapper>
  )
})


export default index