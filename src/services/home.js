import request from "@/utils/request"

export const getHomeRecommendList = () => {
  return request.get("/home/goodprice")
}

export const getHomeHighScoreList = () => {
  return request.get("/home/highscore")
}

export const getHomeDiscountList = () => {
  return request.get("/home/discount")
}

export const getHomeHot = () => {
  return request.get("/home/hotrecommenddest")
}

export const getHomeLongForList = () => {
  return request.get("/home/longfor")
}