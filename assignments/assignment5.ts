
/*Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.*/

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

function getEmpHikePercent(empData:EmployeeTable[]):Map<string,number>{
   
    let hike:number=0;

    for(let val of empData){
        if (val.empRating>=4)
            {
                hike=val.empBaseSalary*(15/100)+1500;
                if(val.empExp>=5){
                     hike+=5000;
                }
               val.hikePercent=(hike/val.empBaseSalary)*100;  
               empHikePercent.set(val.empName,val.hikePercent);
            }
            else if(val.empRating>=3)
                {
                    hike=val.empBaseSalary*(10/100)+1200;
                      if(val.empExp>=5){
                        hike+=5000;
                    }
                     val.hikePercent=(hike/val.empBaseSalary)*100;
                     empHikePercent.set(val.empName,val.hikePercent);
                 }
                 else{
                    hike=val.empBaseSalary*(3/100)+300;
                     if(val.empExp>=5){
                        hike+=5000;
                    }
                    val.hikePercent=(hike/val.empBaseSalary)*100;
                    empHikePercent.set(val.empName,val.hikePercent); 
                 }
                }
                return empHikePercent;
            }
console.log(getEmpHikePercent(employeeTable));
/**************************************
Output:
Map(5) {
  'Alice Johnson' => 23.666666666666668,
  'Bob Smith' => 11.76470588235294,
  'Carol Davis' => 22.926829268292686,
  'David Brown' => 8.88888888888889,
  'Eva Green' => 12
}***************************************/