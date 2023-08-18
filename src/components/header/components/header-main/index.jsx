
import React, { memo } from 'react'
import HeaderMain from "./style"

const index = memo(() => {
  return (
    <HeaderMain>
        <div className="main">
            <button>任何地方</button>
            <button>任何一周</button>
            <button>添加房客</button>
        </div>
    </HeaderMain>
  )
})

export default index