let transactionHistory:number[]=[50000,3000,-2000,3000,-15000,-200,-300,3000]

function getTransactionDetails(transData:number[]):{
    creditedData:number[],
    debitedData:number[],
    suspiciousAmount:number[],
    totalCredited:number,
    totalDebited:number,
    remainingBalance:number
    }
{

let creditedData:number[]=[];
let debitedData:number[]=[];
let suspiciousAmount:number[]=[];
let totalCredited:number=0;
let totalDebited:number=0;
let remainingBalance:number=0;
let p:number=0;
let q:number=0;
let r:number=0;

for(let i=0;i<transData.length;i++){
        if(transData[i]>0){              
            creditedData[p]=transData[i];
            totalCredited+=transData[i];
            p++;
        }
        else{
            debitedData[q]=transData[i];
            totalDebited+=transData[i];
            q++;
            }
        if(transData[i]>=10000||transData[i]<=-10000)
        {
            suspiciousAmount[r]=transData[i];
            r++;
        }
}
    remainingBalance=totalCredited+totalDebited;
    return {creditedData,debitedData,suspiciousAmount,totalCredited,totalDebited,remainingBalance};
       
}

console.log(getTransactionDetails(transactionHistory));

