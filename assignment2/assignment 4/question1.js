const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];


let highestPrice = amdPrices[0];

for (let i = 1; i < amdPrices.length; i++) {
    if (amdPrices[i] > highestPrice) {
        highestPrice = amdPrices[i];
    }
}

console.log("AMD 52-week high price is" , highestPrice)