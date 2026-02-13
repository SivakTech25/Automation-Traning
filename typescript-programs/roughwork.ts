interface EligibilityCheck {
    cibilScore: number;
    salary: number;
    country: string;
    isBankStatementReceived: boolean;
    isCheckBounces: boolean;
    minSalary: number;
    dtiRatio: number;
}

interface CustomerDetails {
    customerName: string;
    customerPhno: string;
    customerMailId: string;
    customerMaritalStatus: boolean;
    customerEmpStatus: boolean;
    customerAge: number;
    isExistingCustomer: boolean;
    eligibilityCheck: EligibilityCheck;
}

const customerDetails: CustomerDetails = {
    customerName: "sivakumar",
    customerAge: 35,
    customerEmpStatus: true,
    customerMailId: "ssivak.tech@gmail.com",
    customerMaritalStatus: true,
    customerPhno: "6381211910",
    isExistingCustomer: false,
    eligibilityCheck: {
        cibilScore: 750,
        isBankStatementReceived: true,
        isCheckBounces: false,
        salary: 100000,
        country: "India",
        minSalary: 50000,
        dtiRatio: 30
    }
};

// Function to get customer details
function getCustomerDetails(data: CustomerDetails): CustomerDetails {
    console.log("***** Printing Customer Details *****");
    return data;
}

// Function to check eligibility
function getEligibilityStatus(data: CustomerDetails): boolean {
    const { cibilScore, salary, minSalary, dtiRatio } = data.eligibilityCheck;

    const isCibilValid = cibilScore >= 750;
    const isSalaryValid = salary >= minSalary;
    const isDtiValid = dtiRatio <= 40;

    if (isCibilValid && isSalaryValid && isDtiValid) {
        console.log("🎉 Loan Approved");
        return true;
    } else {
        console.log("❌ Loan Rejected");
        return false;
    }
}

console.log(getCustomerDetails(customerDetails));
console.log("Eligibility Status:", getEligibilityStatus(customerDetails));
