/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/
function maxProfit(prices) {
    var minPrice = Infinity;
    var maxProfit = 0;
    for (var _i = 0, prices_1 = prices; _i < prices_1.length; _i++) {
        var price = prices_1[_i];
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}
console.log(maxProfit([7, 6, 4, 3, 1]));
