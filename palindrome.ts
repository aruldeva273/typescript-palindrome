// Function to check if a string is a palindrome
function isPalindrome(str: string): boolean {
    // Convert string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Check if cleaned string is equal to its reverse
    return cleanStr === cleanStr.split("").reverse().join("");
}

// Test the function
const testString = "A man, a plan, a canal, Panama";
console.log(`Is "${testString}" a palindrome?`, isPalindrome(testString));
