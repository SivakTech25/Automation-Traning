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
//if max price day after min price day, maxprice-min price =profit
//buy date= min price date, sell date=max price date.

const stockPrice: number[] = [123, 1, 11, 12, 4, 99];

let buyday:number=0;
let sellday:number=1;
let profit:number=0;
let tempProfit:number=0;
let buyPrice:number=0;
let sellPrice:number=0;

for(let i:number=1;i<stockPrice.length;i++){
    if(stockPrice[sellday]>stockPrice[buyday]){
      tempProfit=stockPrice[sellday]-stockPrice[buyday];
      buyPrice=stockPrice[buyday];
      sellPrice=stockPrice[sellday]
       if(profit<tempProfit){profit=tempProfit}
    }
    else{buyday=sellday;}
    sellday++;
}
console.log('BuyPrice:',buyPrice+" SellPrice:",sellPrice+" Profit:",profit);





