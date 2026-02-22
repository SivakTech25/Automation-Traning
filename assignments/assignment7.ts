/*Assignment: Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence

String sentence = "Java programming is fun and challenging";

JavaScript provides numerous built-in methods to manipulate strings, including:
• length: Returns the length of the string.
• charAt(index) or [index]: Returns the character at the specified index.
• concat(str1, str2, ...): Concatenates one or more strings with the original string.
• toUpperCase(): Converts the string to uppercase.
• toLowerCase(): Converts the string to lowercase.
• indexOf(substring): Returns the index of the first occurrence of a specified substring.
• lastIndexOf(substring): Returns the index of the last occurrence of a specified substring.
• slice(startIndex, endIndex): Extracts a section of a string and returns it as a new string.
• substring(startIndex, endIndex): Similar to slice, but doesn't support negative indices.
• substr(startIndex, length): Extracts a specified number of characters from a string, starting at the
specified index.
• replace(searchValue, newValue): Searches a string for a specified value or regular expression and
returns a new string where the specified values are replaced.
• split(separator): Splits a string into an array of substrings based on the specified separator.
• trim(): Removes whitespace from both ends of the string.
• startsWith(prefix): Checks if the string starts with the specified prefix.
• endsWith(suffix): Checks if the string ends with the specified suffix.
• includes(substring): Checks if the string contains the specified substring.
*/

let sentence:string="Java programming is fun and challenging";
const words:string[]=sentence.split(' ');

function reverseString(getString:string[]):string[]{
    let lastIndex:number= getString.length-1;
    let reverseArray:string[]=[];
    for(let val of getString){
        reverseArray.push(getString[lastIndex]);
        lastIndex--;
    }
    return reverseArray;
}

/*------------------Changing the first letter to uppercase in each word-------------------------*/
let caseChange:string[]=[];
for (let val of words){
    caseChange.push(val);
}

for (let i=0;i<caseChange.length;i++){
caseChange[i]=caseChange[i].charAt(0).toUpperCase()+caseChange[i].slice(1);
}

/*------------------Printing the results-------------------------*/

console.log(`Original order of given String:\n "${words}"\n`);
console.log('Number of Words: '+ words.length+"\n");
console.log(`Reverse order of given String:\n "${reverseString(words)}"\n`);
console.log(`Uppercase converstion of given string:\n "${caseChange}"`);



/*******************Output*******************************
Original order of given String:
 "Java,programming,is,fun,and,challenging"

Number of Words: 6

Reverse order of given String:
 "challenging,and,fun,is,programming,Java"

Uppercase converstion of given string:
 "Java,Programming,Is,Fun,And,Challenging"
*/

