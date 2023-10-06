import React, { memo, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import DiscountWrapper from './style'
import RoomItem from '@/components/room-item/index'

const HomeDiscount = memo((props) => {
  const { title, subtitle, dest_address, dest_list } = props.discountList
  // initialState：你希望 state 初始化的值。
  // 它可以是任何类型的值，但对于函数有特殊的行为。在初始渲染后，此参数将被忽略。
  // 所以在此处去进行三元运算符判断是没用的
  const [address, setAddress] = useState('')
  const [roomList, setRoomList] = useState([])
  const addressList = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    if (dest_address) {
      setAddress(dest_address[0].name)
      setRoomList(dest_list[dest_address[0].name])
    }
  }, [dest_address, dest_list])

  const changeAddress = (addressItem) => {
    setAddress(addressItem.name)
    setRoomList(dest_list[addressItem.name])
  }
  const clickList = (distance) => {
    addressList.current.scrollTo({
        left: addressList.current.scrollLeft + distance,
        behavior: 'smooth'
    })
  }
  return (
    <DiscountWrapper>
      <h2>{title}</h2>
      <p className="desc">{subtitle}</p>
      <div className="address-list-wrapper">
        <div className="right-button" onClick={() => clickList(400)}>
          <ChevronRightIcon style={{ fontSize: 20, color: '#717171' }} />
        </div>
        <div className="left-button" onClick={() => clickList(-400)}>
          <ChevronLeftIcon style={{ fontSize: 20, color: '#717171' }} />
        </div>
        <ul ref={addressList} className="address-list">
          {dest_address &&
            dest_address.map((addressItem) => (
              <li
                key={addressItem.name}
                className={`address-item ${
                  address === addressItem.name ? 'active' : ''
                }`}
                onClick={() => changeAddress(addressItem)}
              >
                {addressItem.name}
              </li>
            ))}
        </ul>
      </div>

      <ul className="room-list">
        {roomList?.map((item) => (
          <RoomItem key={item.id} roomItem={item} width="calc(25% - 20px)" />
        ))}
      </ul>
      <div className="show-all" onClick={() => navigate('/more')}>查看{address}的全部房源 &gt;</div>
    </DiscountWrapper>
  )
})

export default HomeDiscount
