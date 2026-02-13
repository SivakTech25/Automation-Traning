//**Assignment 1 – Data Types
//1. Temperature of a city in degrees Celsius: 25.5
//2. Whether a customer has placed an order: true or false
//3. Person's phone number: "123-456-7890"
//4. Amount of money in a customer's bank account: 1000.50
//5. Person's email address: "john.doe@example.com"
    //6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
//7. Person's marital status: true or false
//8. Person's occupation: "Software Engineer"
//9. Person's favourite colour: "Blue"
//10.Current year: 2023
//11.Number of followers on a social media platform: 1,000,000
//12.Rating of a movie: 7.5
//13.Person's blood type: 'A'
//14.Title of a book: "To Kill a Mockingbird"
//15.Number of employees in a company: 500
//16.Time of an event: 2:30 PM
//17.Name of a country: "United States"
//18.Person's eye color: "Brown"
//19.Person's birthplace: "New York City"
//20. Distance between two cities: 200.5 

let tempOfCity:number=25.5;
let isOrderPlaced:boolean =true;
let Longitude:number= 37.7749;
let Latitude:number = -122.4194;
let currentDate = new Date();
let noOfFollowers:number=100000;
let movRating:number=7;
let bookTitle:string="To Kill a Mockingbird";
let empCount:number=100;
let eventTime:string="2:30 PM";
let countryName:string="USA";
function getAccountBalance() : number
{
    console.log("Navigate to the account balance page");
    let accountBalance = 1000.50;
    return accountBalance;
}
interface personInfo
{
    phNo:number|string,
    emailAdd:string,
    maritalStatus:boolean,
    occupation:string,
    favColour:string,
    eyeColour:string,
    bloodType:string,
    birthPlace:string
}
let person:personInfo=
{
    phNo:"123-456-7890",
    emailAdd:"john.doe@example.com",
    maritalStatus:true,
    occupation:"Software Engineer",
    favColour:"Blue",
    eyeColour:"Brown",
    bloodType:"A+",
    birthPlace:"India"
}
console.log("Temperature of a city in degrees Celsius:",tempOfCity);
console.log("Customer placed order successfully:", isOrderPlaced);
console.info("Person PhNo: ",person.phNo);
console.info("Person EmailAddress: ",person.emailAdd);
console.info("Person Marital Status:",person.maritalStatus);
console.info("Person Occupation:",person.occupation);
console.info("Person Favourite Colour:",person.favColour);
console.info("Person Eye Colour:",person.eyeColour);
console.info("Person Blood Type:",person.bloodType);
console.info("Person Birth Place:",person.birthPlace);
console.log("Customer Account Balance:", getAccountBalance());
console.log("longitude:",Longitude,"latitude:",Latitude);
console.log("Current Year:",currentDate.getFullYear());
console.log("Number of followers in Social media:", noOfFollowers);
console.log("Movie Rating:", movRating);
console.log("Title of a book:",bookTitle);
console.log("Number of employees in a company:",empCount);
console.log("Time of Event:",eventTime);
console.log("Name of Country:",countryName);
