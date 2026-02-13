/*A customer applies for a personal loan.

/*1.Created object for getting Customer personal details*/
/*2.Created function to print Customer personal details*/
/*3.Created function to get the status of loan eligiblity based on Cibil & Other Creteria like Salary,DTI ratio..*/
/*Eligiblity logic 
->If Cibil satisfied ex: >=750 ->> Loan is approvaed automatically
->IF Cibile is not met, Checking other creteria like salary and DTI ratio and approving the loan
->IF both cibil and other creteria is not met, then loan is not approved*/
/*4. Calling the function to print the customer details
/*5. Calling the function to print the loan status
/************************************************************************************************************/

/** 1.creating object for customer details**/

interface CustomerDetails
{
customerName:string,
customerPhno:number,
customerMailId:string,
customerMaritalStatus:boolean,
customerEmpStatus:boolean,
customerAge:number,
isExistCustomer:boolean,
 eligiblityCheck:
{
    cibilScore:number,
    salary:number,
    country:string,
    isBankStatementRecieved:boolean,
    isCheckBounces:boolean,
    minSalary:number,
    dtiRatio:number
}
}
let customerDetails:CustomerDetails=
{
customerName:"sivakumar",
customerAge:35,
customerEmpStatus:true,
customerMailId:"ssivak.tech@gmail.com",
customerMaritalStatus:true,
customerPhno:6381211910,
isExistCustomer:false,
eligiblityCheck:
{
cibilScore:749.99,
isBankStatementRecieved:true,
isCheckBounces:true,
salary:100000,
country:"India",
minSalary:50000,
dtiRatio:39
}
}

/*** 2.Creating function to get the customer details***/
function getCustomerDetails(getCusData:CustomerDetails):CustomerDetails
{
    console.log("*****Printing the Customer Details*****");
    return getCusData;
}

/*** 3.Creating function to check the customer eligiblity status***/
function getEligiblityStatus(getEligible:CustomerDetails):void
{
    /***Checking the eligiblity status of the Customer applying Loan ***/ 
    console.log("\n/***Checking the eligiblity status of the Customer applying Loan ***/\n")
    
    //---declaring boolean to check the cibil---/
    const Cibil_Status:boolean=customerDetails.eligiblityCheck.cibilScore>=750;
    
    //-----declaring boolean to check the condition to match other creteria if cibil score is not met-----/
    const Other_Creteria_Status:boolean=customerDetails.eligiblityCheck.salary>=customerDetails.eligiblityCheck.minSalary
    &&customerDetails.eligiblityCheck.dtiRatio<=40;

/***Checking the Loan approval Status of Customer Using Conditional Statement***/
if(Cibil_Status)
{
   console.log("Cibil Check......\n"+"->>Customer Cibil Score is:"+customerDetails.eligiblityCheck.cibilScore + 
    '\n->>Customer Eligiblity based on Cibil Status:' + Cibil_Status);
   console.log("\nCongratulation!! Your loan is approved based on your CIBIL....");
}
else if(Other_Creteria_Status)
{
    console.log("Cibil Check......\n"+"->>Customer Cibil Score is:"+customerDetails.eligiblityCheck.cibilScore + 
    '\n->>Customer Eligiblity based on Cibil Status:' + Cibil_Status);
    console.log('\nChecking based on Salary & DTI Ratio......'+"\nSalary : ", customerDetails.eligiblityCheck.salary +
        '\nDTI Ratio: ', customerDetails.eligiblityCheck.dtiRatio, "\nMeets the requirements....");
    console.log("\nCongratulation!! Your loan is approved based your Salary and DTI ratio.....");
}
else console.log("\n Sorry!!!..Your loan is not approved at this time, Please try after 6 months ");
}

/*** 4.Getting the Customer Details using Function by passing the Object and getting the values in Return***/
console.log(getCustomerDetails(customerDetails));
/*** 5.Getting the Eligiblit Status using Function by passing the Object and printing the status***/
console.log(getEligiblityStatus(customerDetails));


