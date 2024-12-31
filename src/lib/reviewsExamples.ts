export const createReview = `
{
  "productId": 0,
  "userId": 0,
  "description": "string",
  "rate": 0
}
`
export const getAllReviews = `
{
  "msg": "This is the all reviews",
  "response": [
    {
      "productId": 2,
      "userId": 1004,
      "description": "Es un gran cubo, muy buen material, muy lindo y tiene gran giro",
      "rate": 5
    }
  ]
}
`

export const getReviewById = `
{
  "msg": "This is the reviews from the this ID",
  "response": {
    "productId": 2,
    "userId": 1004,
    "description": "Es un gran cubo, muy buen material, muy lindo y tiene gran giro",
    "rate": 5
  }
}
`
export const postReviwBody = `
export interface CreateReview {
  productId: number,
  userId: number,
  description: string,
  rate: number
}
`
