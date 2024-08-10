const inputString = "perpendicular";
const result = firstNonRepeatingChar(inputString);
console.log(result);

function firstNonRepeatingChar(str) {
    // Create an object to store character counts
    const charCounts = {};
  
    // Count the frequency of each character
    for (let char of str) {
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  
    // Find the first character with a count of 1
    for (let char of str) {
      if (charCounts[char] === 1) {
        return char;
      }
    }
  
    // If no non-repeating character is found, return null
    return null;
  }