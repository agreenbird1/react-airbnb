import request from "@/utils/request"


export const getHighScoreList = () => {
  return request.get("/home/highScore")
}

export const getHomeRecommendList = () => {
  return request.get("/home/goodprice")
}