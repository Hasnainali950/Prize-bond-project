const randomPrizeGenerator = (num)=>{
    return Math.floor(Math.random() * num)
}


const prize = {
    cars: ["Ferrari","BMW","Audi","Ford","Lamborghini","Range Rover","Mercedes"],
    appartment: ["Dubai","England","France","Maldives","Turkey","Japan"],
    money: ["$20000","$40000","$60000","$80000","$100000","$500000"]
} 

let won = []

for (let prop in prize){
    let option = randomPrizeGenerator(prize[prop].length)
    switch(prop){
        case "cars":
            won.push(`Yours 1st prize is: You won a ${prize[prop][option]} car.`)
            break;
        case "appartment":
            won.push(`Yours 2nd prize is: You won a appartment in ${prize[prop][option]}.`)
            break;
        case "money":
            won.push(`Yours 3rd prize is: You won ${prize[prop][option]} pounds.`)
            break;
        default:
            console.log("You did'not win any prize.Try again! ")
    }
}

const formated = (wonArray)=>{
    return wonArray.join('\n')
}

console.log(formated(won))

// This is the program to generate random quotes

// const randomQuotesGenerator = (quote)=>{
//  let random = Math.floor(Math.random() * quote.length)
//   return quote[random]
// }

// const quotes = ["Life is what happens when you're busy making other plans.","May you live all the days of your life.",
// "Life is really simple, but we insist on making it complicated.","Life itself is the most wonderful fairy tale." ,
// "Life is ours to be spent, not to be saved.","Love the life you live. Live the life you love."]

// console.log(randomQuotesGenerator(quotes))