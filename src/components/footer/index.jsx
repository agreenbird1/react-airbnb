import React, { memo } from 'react'
import Button from '@material-ui/core/Button'
import Rating from '@material-ui/lab/Rating'

const index = memo(() => {
  const [value, setValue] = React.useState(2)
  return (
    <div>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      />
      <Button variant="contained" color="primary">
        你好，世界
      </Button>
    </div>
  )
})

export default index
