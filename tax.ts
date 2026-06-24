let income: number = 15000;
console.log(`Income : ${income}bath`);


let yincome: number = income *12;
console.log(`Income : ${yincome}bath`);

let rate: number;
if (yincome<100000){
    rate=5;
}else if(yincome<200000){
    rate=7;
}else if(yincome<500000){
    rate=10;
}else{
    rate=12;
}
console.log("tax : %f %",rate.toFixed(2));
let tax: number = yincome * rate/100;
console.log(`paidtax : ${tax.toFixed(2)}bath`);