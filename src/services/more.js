import request from '@/utils/request'

export const getMoreRoomList = (offset = 0, size = 20) => {
  return request.get('entire/list', {
    params: {
      offset,
      size,
    },
  })
}
