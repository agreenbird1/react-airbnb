import React, { useState } from 'react'
import filterData from '@/assets/data/filter-data.json'
import MoreFilterWrapper from './style'
import classnames from 'classnames'

function MoreFilter() {
  const [selectItems, setSelectItems] = useState([])
  const toggleSelectedItem = (item) => {
    const newSelectItems = [...selectItems]
    if (newSelectItems.includes(item))
      newSelectItems.splice(newSelectItems.findIndex(i => i === item), 1)
    else newSelectItems.push(item)
    setSelectItems(newSelectItems)
  }

  return (
    <MoreFilterWrapper>
      {filterData.map((item) => (
        <div
          className={classnames('filter-item', {
            active: selectItems.includes(item),
          })}
          onClick={() => toggleSelectedItem(item)}
          key={item}
        >
          {item}
        </div>
      ))}
    </MoreFilterWrapper>
  )
}

export default MoreFilter
