
/*    *
     ***
    *****
   ******* */

let row:number = 5;
let s:number = row - 1;
let str:number = 1;
let store:string='';

for (let i = 0; i < row; i++) {
    for (let j = 0; j < s; j++) {
        store=store+' ';
    }
    for (let k = 0; k < str; k++) {
           store=store+'* ';
    }
    s--;
    str += 1;
    console.log(store);
    store='';
}
