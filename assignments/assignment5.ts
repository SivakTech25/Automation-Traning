/*Map ==> Map represents a collection of key-value pairs. 
let empInfoMap:Map<number,string> = new Map();
empInfoMap.set(123,"Bharath");
empInfoMap.set(124,"Sarath");
//Set ==> Set represents list of unique values. 
let empIds:Set<number> = new Set();
empIds.add(123);
empIds.add(124)

 empName:'Alice Johnson',baseSalary:number,exp:number,rating:number
Alice
Johnson 75000.0 5.1 4.2
2 Bob Smith 68000.0 3.2 3.8
3 Carol Davis 82000.0 7.1 4.5
4 David Brown 90000.0 10.2 2.5
5 Eva Green 60000.0 2.4 3.5
*/
let empHikePercent:Map<string,number> = new Map();
interface EmployeeTable{
    empName:string,
    empBaseSalary:number,
    empExp:number,
    empRating:number,
    hikePercent:number
}
let employeeTable:EmployeeTable[]=[
    {empName:'Alice Johnson',empBaseSalary:75000,empExp:5.1,empRating:4.2,hikePercent:0},
    {empName:'Bob Smith',empBaseSalary:68000,empExp:3.2,empRating:3.8,hikePercent:0},
    {empName:'Carol Davis',empBaseSalary:82000,empExp:7.1,empRating:4.5,hikePercent:0},
    {empName:'David Brown',empBaseSalary:90000,empExp:10.2,empRating:2.5,hikePercent:0},
    {empName:'Eva Green',empBaseSalary:60000,empExp:2.4,empRating:3.5,hikePercent:0},
]


//console.log(75000+((75000*15)/100));
function getEmpHikePercent(empData:EmployeeTable[]):EmployeeTable[]{
   
    let hike:number=0;

    for(let val of empData){
        if (val.empRating>=4)
            {
                hike=val.empBaseSalary+((15*val.empBaseSalary)/100)+1500;
                if(val.empExp>=5){
                     hike+=5000;
                }
               val.hikePercent=hike/val.empBaseSalary;
                
            }
            else if(val.empRating>=3)
                {
                    hike=(val.empBaseSalary+((10*val.empBaseSalary)/100)+1200);
                      if(val.empExp>=5){
                        hike+=5000;
                    }
                     val.hikePercent=hike/val.empBaseSalary;
                 }
                 else{
                    hike=val.empBaseSalary+((3*val.empBaseSalary)/100)+300;
                     if(val.empExp>=5){
                        hike+=5000;
                    }
                    val.hikePercent=hike/val.empBaseSalary; 
                 }
                }
                return empData;
            }

console.log(getEmpHikePercent(employeeTable));