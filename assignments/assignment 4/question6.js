const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

//collegues code
// let data = ()
// for price in data:
// 	if price < 3:
//     data.push(price)

// My Code
let lowestPrice = Infinity;
let secondLowestPrice = Infinity;
let thirdLowestPrice = Infinity;
for (let i = 0; i < amdPrices.length; i++) {
    if (amdPrices[i] < lowestPrice) {
        thirdLowestPrice = secondLowestPrice;
        secondLowestPrice = lowestPrice;
        lowestPrice = amdPrices[i];
    }
    else if (amdPrices[i] < secondLowestPrice && amdPrices[i] !== lowestPrice) {
        thirdLowestPrice = secondLowestPrice;
        secondLowestPrice = amdPrices[i];
    } else if (amdPrices[i] < thirdLowestPrice && amdPrices[i] !== lowestPrice && amdPrices[i] !== secondLowestPrice) {
        thirdLowestPrice = amdPrices[i];
    }
}
console.log("The three lowest AMD prices are:", lowestPrice.toFixed(2), secondLowestPrice.toFixed(2), thirdLowestPrice.toFixed(2));