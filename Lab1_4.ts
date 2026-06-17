let grossincome: number = 50000;
let taxrate: number = 0.07;
let taxpaid: number = grossincome * taxrate;
let netincome: number = grossincome - taxpaid;

console.log("-------tax calculation report-------");
console.log("Gross Income: $" + grossincome);
console.log("Tax Rate: " + (taxrate * 100) + "%");
console.log("Tax Paid: $" + taxpaid);
console.log("Net Income: $" + netincome);
console.log("------------------------------------");