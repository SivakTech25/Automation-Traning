/*Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word

String paragraph = "Java is a popular programming language. Java is used for web
development, mobile applications, and more.";*/


const paragraph:string="Java is a popular programming language. Java is used for web development, mobile applications, and more."
const convertArray:string[]=paragraph.split(' ');

function findOccurance(getString:string[]):{index:number[]}{
    let index:number[]=[];
    for(let i=0;i<getString.length;i++){
        if(getString[i]=='Java'){
            index.push(i)
        }
    }
    return {index};
}
const result=findOccurance(convertArray);
console.log("Total No of Occurance:"+result.index.length);
console.log("Index of Occurance:"+result.index);



/*PS D:\Automation Training\assignments> npx tsx assignment8.ts
Output:
Total No of Occurance:2
Index of Occurance:0,6
*/