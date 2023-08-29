import React, { memo } from 'react'
import HeaderMain from './style'

const index = memo(() => {
  return (
    <HeaderMain>
      <div className="main">
        <button>
          <span>任何地方</span>
        </button>
        <button>
          <span>任何一周</span>
        </button>
        <button>
          <span>添加房客</span>
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              style={{
                display: 'block',
                fill: 'none',
                height: '12px',
                width: '12px',
                strokeWidth: 5.333333333333333,
                stroke: '#fff',
                overflow: 'visible',
              }}
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path
                fill="none"
                d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </HeaderMain>
  )
})

export default index
