

let potteryToSell = []

export const toSellOrNotToSell = (potteryObject) => { 
    if (potteryObject.potteryWeight >= 6) { 
       potteryObject.price = 40
    } else if (potteryObject.potteryWeight < 6) { 
        potteryObject.price = 20 
    } else if (potteryObject.cracked === true) { 
        potteryObject.price = 0
    } 
    return potteryObject
}

export const usePottery = () => { 
    return potteryToSell
}


