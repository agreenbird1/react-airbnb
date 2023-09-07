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