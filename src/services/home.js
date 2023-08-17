import request from "@/utils/request"


export const getHighScoreList = () => {
  return request.get("/home/highScore")
}