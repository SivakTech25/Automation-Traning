//palindrome 

// Top Spot:
// Red roses run no risk, sir, on Nurse’s order
// Racecar
// Doc, note: I dissent. A fast never prevents a fatness. I diet on cod.

class palindrome {
    lastIndex: number = 0;
    centerIndex: number = 0;
    originalString: string = 'racecara';

    palindromeTest(testString: string): boolean {

        let cleanedString = testString.replace(/[^a-z/A-Z]/g, '').toLowerCase();
        this.lastIndex = cleanedString.length - 1;
        this.centerIndex = this.lastIndex / 2;
        for (let i = 0; i < this.centerIndex; i++) {
            if (cleanedString.charAt(i) !== cleanedString.charAt(this.lastIndex)) {
                return false;

            }
            this.lastIndex--;
        }
        return true;
    }
}

let objPalindrome = new palindrome();
console.log("Given Phrase:", objPalindrome.originalString)
if (objPalindrome.palindromeTest(objPalindrome.originalString)) {
    console.log("Result: Yes its a palindrome...");
} else { console.log("Result: No its not a palindrome"); }

/*output
PS D:\Automation Training\assignments> npx tsx assignment13.ts
Given Phrase: "A man, a plan, a canal: Panama"
Result: Yes its a palindrome...*/













