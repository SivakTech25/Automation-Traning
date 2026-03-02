/*
Assignment: Write a program to print * in triangle pattern
1. If I will pass int rows = 5 then it should print triangle with 5 Rows
*
**
***
****
*****  */

//const noOfRows:number=0;
let a:string[]=['*'];
let b:string[]=[];
function printTraingle(rows:number):void{
   
     while (rows){
        //if(rows>rows-1)
        b.push(a[0]);
        rows--;
     }
}
printTraingle(5);
console.log(b);



        


