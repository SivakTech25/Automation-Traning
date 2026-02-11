//***Different types of data types******//
//**premitive(immutable) & Non premitive(mutable)**//
//immutable - Cannot change the original value
//mutable - will change the original value
//immutable types are number, string, boolean, null, undefined and Symbols
//mutable types are array, object

/**********************immutable examples***********************/
let a=10;
let b=a;
a=100;
console.log(b); //---> output = 10 -immutable

//*******Obeject datatypes usage********//
let car =
 {
    colour: "White",
    brand: "Hyundai",
    capacity: 1500,
    type: "Sedan",
    model: "Verna",
    mfgDate: 2024,
    noOfOwner: 1,
    price: 160000,
    serviceRecord:
{
noOfKmDriven:2000,
serviceHistory:'yes',
noOfService:2,
 }
}
console.log("Car details.......");
console.log("colour:", car.colour);
console.log(car.model);
console.log(car.serviceRecord.noOfKmDriven);
console.log(car.serviceRecord.serviceHistory);

/***array datatype usage*****/









