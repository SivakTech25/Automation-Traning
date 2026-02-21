
/*********check prime number*******************/

function checkIfPrime(inputNumber:number):string{
    
    if(inputNumber<=1){return"not prime";}

        for(let i=2;i<=Math.sqrt(inputNumber);i++){
                 if(inputNumber%i===0){
                    return "Given number is not a prime number";
                 }
                }
                 return "Yes it's a prime number";
                            
    }
console.log(checkIfPrime(10003))

