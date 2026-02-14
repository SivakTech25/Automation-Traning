/*Assignment -3 (Arrays/Datatypes/Operators)

1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0*/

let studentName:string[]=["Suresh","Mahesh","Naresh"];
let studentActualMarks:number[]=[75,80,82];
let studentUpdatedMarks:number[]=[];
function updateMark(getMark:number[],addMarks:number):void
{
    let avg:number=0;
    console.log("Updated Marks:");
    for(let i:number=0;i<getMark.length;i++)
        {
            getMark[i]+=addMarks;
            avg+= getMark[i];
            console.log(studentName[i],":", getMark[i]);
        }
        avg=avg/getMark.length;
        console.log("Average marks:",avg);
}
updateMark(studentActualMarks,10);
