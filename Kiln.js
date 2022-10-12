
export const firePottery = (potteryObject, temperature) => { 
   potteryObject.fired = true
   if (temperature > 2200) {
    potteryObject.cracked = true
   } else if (temperature <= 2200) { 
    potteryObject.cracked = false
   }
   return potteryObject

}