const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];
let totalClose = 0;
for (let i = 0; i < disneyData.length; i++) {
    let closePrice = parseFloat(disneyData[i].close);
    totalClose += closePrice;
}

const averageClose = totalClose / disneyData.length;
console.log("The average closing price of Disney is", averageClose.toFixed(2));