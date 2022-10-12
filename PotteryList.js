import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    const potteryForSale = usePottery()

    let htmlString = `<section class="pottery" id="pottery--1">`

    for (const pottery of potteryForSale) {
        htmlString += `<h2 class="pottery_shape">${pottery.potteryShape}</h2>\n<div class="pottery__properties">Item weighs ${pottery.potteryWeight} grams and is ${pottery.potteryHeight} cm in height</div>\n<div class="pottery__price">Price is $${pottery.price}</div></section>`
    }
    return htmlString
}

