// Imports go first
import { makePottery } from "./PotteryWheel.js"

import { firePottery } from "./Kiln.js"

import { toSellOrNotToSell } from "./PotteryCatalog.js"

import { usePottery } from "./PotteryCatalog.js"

import { PotteryList } from "./PotteryList.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 2)
let cup = makePottery("cup", 6, 5)
let plate = makePottery("plate", 7, 1)
let bowl = makePottery("bowl", 4, 4)
let vase = makePottery("vase", 6, 7)

// console.log(mug) 
// console.log(cup) 
// console.log(plate) 
// console.log(bowl) 
// console.log(vase) 


//Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2500)
let firedCup = firePottery(cup, 2000)
let firedPlate = firePottery(plate, 2000) 
let firedBowl = firePottery(bowl, 2400) 
let firedVase = firePottery(vase, 2000)

// console.log(firedMug)
// console.log(firedCup) 
// console.log(firedPlate) 
// console.log(firedBowl) 
// console.log(firedVase)


// Determine which ones should be sold, and their price
toSellOrNotToSell(mug)
toSellOrNotToSell(cup)
toSellOrNotToSell(plate)
toSellOrNotToSell(bowl)
toSellOrNotToSell(vase)

console.log(usePottery())

// Invoke the component function that renders the HTML list
const potteryForSale = usePottery() 

console.log(potteryForSale)

for (const pottery of potteryForSale) { 
    console.log(pottery) 
}

const parentHTMLElement = document.querySelector(".PotteryList")
const htmlString = `<div>${PotteryList()}</div>`

parentHTMLElement.innerHTML = htmlString






