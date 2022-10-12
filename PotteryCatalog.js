

let potteryToSell = []

export const toSellOrNotToSell = (potteryObject) => { 
    if (potteryObject.potteryWeight >= 6) { 
       potteryObject.price = 40
    } else if (potteryObject.potteryWeight < 6) { 
        potteryObject.price = 20 
    } if (potteryObject.cracked) { 
        potteryObject.price = 0
    } else { 
        potteryToSell.push(potteryObject)
    }
    return potteryObject
}

export const usePottery = () => { 
    return potteryToSell
}



