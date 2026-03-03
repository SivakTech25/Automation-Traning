/*-----------------------String manipulation---------------------------------
. length: Returns the length of the string.
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
• includes(substring): Checks if the string contains the specified substring.*/

let row: number = 30;
let s: number = row - 1;
let str: number = 1;
let store: string='';

for (let i = 0; i < row; i++) {
    for (let j = 0; j < s; j++) {
        store=store+' ';
    }
     let num:number=1;
    for (let k = 0; k < str; k++) {
   
           store=store+' '+num;
           num++;
    }
    s--;
    str +=1;
    num=1;
   
    console.log(store);
    store='';
}
s=1;
str=str-2;
 for (let i = 0; i < row; i++) {
     let num=1;
    for (let j = 0; j < s; j++) {
        store=store+' ';
    }
    for (let k = 0; k < str; k++) {
           store=store+' '+num;
           num++;
    }
    s++;
    num-1;
    str -= 1;
   
    console.log(store);
    store='';
}
