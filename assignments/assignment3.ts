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

let studentName:string[]=["Suresh","Mahesh","Naresh"];// array to store student name
let studentActualMarks:number[]=[75,80,82];//array to store students actuall marks
let updatedMarks:number[]=[];

//*******funtion to update marks and store it in another array and priting the final score*********/
function updateMark(actualMark:number[],addMarks:number):void
{
    let avg:number=0;
    console.log("Updated Marks:");
   for(let i:number=0;i<actualMark.length;i++)
        {
            updatedMarks[i]=actualMark[i]+addMarks;//adding the marks to finalmarks array
            avg+= updatedMarks[i];
            console.log(studentName[i],":", updatedMarks[i]);
        }
        avg=avg/actualMark.length;
        console.log("Average marks:",avg);   
}

//*******Callig function to update student marks and print the updated marks******* */
updateMark(studentActualMarks,10);

