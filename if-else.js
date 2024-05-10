/*Write a program to input electricity unit charges and calculate the total electricity bill according to the given condition:
For the first 50 units Rs. 0.50/unit
For the next 100 units Rs. 0.75/unit
For the next 100 units Rs. 1.20/unit
For units above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill*/

const input = require("readline-sync")

let n = input.questionInt(`enter the value of n :`);
if(n<=50){
    b = n*0.50
    sc = b*0.20
    tb = b+sc
    console.log(tb);
}else if (n<=150){
b = n*0.75 + (n-100)*0.50
sc = b*0.20
tb = b+sc
     console.log(tb);
}else if (n<=250){
   b = n*1.20 + (n-100)*0.75 +(n-200)*0.50
   sc = b*0.20
   tb = b+sc
   console.log(tb);

}else if (n>250){
    b = n*1.50+(n-250)*1.20+(n-350)*0.75+(n-450)*0.50
    sc = b*0.20
    tb = b+sc
    console.log(tb);
}
