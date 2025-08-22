const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

let totalPrice = 0;
for (let i = 0; i < amdPrices.length; i++) {
     totalPrice += amdPrices[i];
    }

const averagePrice = totalPrice / amdPrices.length

let count = 0;

for (let i = 0; i < amdPrices.length; i++) {
    if (amdPrices[i] > averagePrice) {
        count+= 1;
    }
}

 console.log("The number of days AMD's price was above the 7-day SMA is:", count);