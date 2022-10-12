let numberId = 1

export const makePottery = (shape, weight, height) => {
   const potteryPiece = { 
    id: numberId++, 
    potteryShape: shape,
    potteryWeight: weight,  
    potteryHeight: height
   }
  return potteryPiece
}





