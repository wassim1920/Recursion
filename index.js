function isPalindrome(word) {
  word = word.toLowerCase();
  if (word.length <= 1) {
    return true;
  }
  
  if (word[0] === word[word.length - 1]) {
    return isPalindrome(word.slice(1, -1));
  } else {
    return false;
  }
}

// Example usage
console.log(isPalindrome("gag")); // true
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("php")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("world")); // false
