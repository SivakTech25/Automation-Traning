let transactionHistory:number[]=[50000,3000,-2000,3000,-15000,-200,-300,3000]

function getTransactionDetails(transData:number[]):{
    creditedData:number[],
    debitedData:number[],
    suspiciousAmount:number[],
    totalCredited:number,
    totalDebited:number,
    remainingBalance:number,
    debitCount:number,
    creditCount:number,
    suspiciousCount:number
    }
{

let creditedData:number[]=[];
let debitedData:number[]=[];
let suspiciousAmount:number[]=[];
let totalCredited:number=0;
let totalDebited:number=0;
let remainingBalance:number=0;
let creditCount:number=0;
let debitCount:number=0;
let suspiciousCount:number=0;

for(let i=0;i<transData.length;i++){
        if(transData[i]>0){              
            creditedData[creditCount]=transData[i];
            totalCredited+=transData[i];
            creditCount++;
        }
        else{
            debitedData[debitCount]=transData[i];
            totalDebited+=transData[i];
            debitCount++;
            }
        if(transData[i]>=10000||transData[i]<=-10000)
        {
            suspiciousAmount[suspiciousCount]=transData[i];
            suspiciousCount++;
        }
}
    remainingBalance=totalCredited+totalDebited;
    return {creditedData,debitedData,suspiciousAmount,totalCredited,totalDebited,remainingBalance,debitCount,creditCount,suspiciousCount};
        
    }

console.log(getTransactionDetails(transactionHistory));

