/*Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the i
th day.
You want to maximize your profit by choosing a single day to buy one stock and choosing
a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve
any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy
before you sell.
Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.*/

//find the minprice of all day
//find max price of all day after minprice day,
//if no max price after minprice day - profit is zero
//if max price day after min price da4y, maxprice-min price =profit
//buy date= min price date, sell date=max price date.

//const stockPrice: number[] = [123, 1, 11, 12, 4, 99];
//const stockPrice: number[] = [7,6,4,3,1];
//const stockPrice: number[] =  [7,6,1,1,5];
const stockPrice: number[] =[7,1,5,3,6,4] 
//const stockPrice: number[] =[7,6,4,3,1] 
//const stockPrice: number[] =[1,2];
//const stockPrice: number[] =[2,1] 
//const stockPrice: number[] =[1,1,1]


let currentDay: number = 0;
let nextDay: number = 1;
let profit: number = 0;
let tempProfit: number = 0;
let buyPrice: number = 0;
let sellPrice: number = 0;
//let buyDay:number=0;
//let sellDay:number=0;

for (let i: number = 0; i < stockPrice.length-1; i++) {
    if (stockPrice[nextDay] > stockPrice[currentDay]) {
        tempProfit = stockPrice[nextDay] - stockPrice[currentDay];
        if (profit < tempProfit) {
            profit = tempProfit;
            buyPrice = stockPrice[currentDay];
            sellPrice = stockPrice[nextDay];
            //buyDay=currentDay;
            //sellDay=nextDay;
        }
    }
    else { currentDay = nextDay; }
    nextDay++;
}
console.log('BuyPrice:', buyPrice + " SellPrice:", sellPrice + " Profit:", profit);// + " Buydate:", buyDay + " Selldate:", sellDay);





