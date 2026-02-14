/*Assignment-2 (Conditional Statements)

A bank evaluates loan applicants based on the following criteria:
1. Credit Score:
o If the credit score is above 750, the loan is automatically approved.
o If the credit score is between 650 and 750, additional checks are performed.
o If the credit score is below 650, the loan is denied.
2. Income:
o For credit scores between 650 and 750, the customer’s income must be at least $50,000
for the loan to be considered.

3. Employment Status:
o If the customer’s income is at least 50,000, the system checks whether the customer is
employed.
o If the customer is unemployed, the loan is denied.
4. Debt-to-Income Ratio:
o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
o If the DTI ratio is less than 40%, the loan is approved.
o If the DTI ratio is 40% or greater, the loan is denied.

Create common function and then based on below details, print whether user is eligible to get the loan
or not
customerName = "John Doe";
creditScore = 720;
income = 55000.0;
isEmployed = true;
debtToIncomeRatio = 35.0;*/

/*****Creating object for Customer Details*****/

interface Customer_Details
{
    customerName:string,
    creditScore:number,
    income:number,
    isEmployed:boolean,
    debtToIncomeRatio:number
}
const customerDetails:Customer_Details=
{
customerName:"John Doe",
creditScore:729,
income:60000,
isEmployed:true,
debtToIncomeRatio:25
}
/*****************************Eligiblity Check Conditions for loan approval************************************/

function eligiblityCheck(getData:Customer_Details):string
{
/******declaring and intializing values to check eligiblity conditions*****/
    const Good_Credit_Score:
    boolean=getData.creditScore>750;
    const Avg_Credit_Score:
    boolean=getData.creditScore>=650&&getData.creditScore<=750;
    const Income_Status:
    boolean=getData.income>=50000;
    const Good_Dti_Ratio:
    boolean=getData.debtToIncomeRatio<40;
    const Emp_Status:
    boolean=getData.isEmployed;
/******************************Checking the credit score using conditional statement************************/
    console.log("Checking the Credit Score......");
    if (Good_Credit_Score)
    {return "Congrats! Your loan is approved";}
    else if(Avg_Credit_Score)
    {
        if(Income_Status)
        {
            if(Emp_Status)
            {
                if(Good_Dti_Ratio)
                {
                    return("Congrats, loan is approved...");
                }
                else return("Loan is rejected due to High DTI ratio");
            }
            else return("loan is rejected due to unemployment status");
        }
        else return("loan is rejected due to less income");    
    }
    else return("loan is rejected due to bad credit score......");
}
/******************************Printing the cutomer details********************************/
console.log("Cutomer Details:\n", customerDetails);

/********************************Fuction to check the loan approval*************************/
console.log(eligiblityCheck(customerDetails));

