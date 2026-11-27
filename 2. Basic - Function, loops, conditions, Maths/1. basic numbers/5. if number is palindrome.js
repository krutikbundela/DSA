// check if number is plaindrome
// if 121 reverese 121 then YES it's palindrome

// 1. convert into string, reverse then compare
// 2. while loop ===> extract last digit then append reversly to create new number then compare



// 1. convert into string, reverse then compare

function isPalindrome(n) {

    if (n < 0) return false;

    let orignal = n.toString();


    const reversed = orignal.split("").reverse().join("");

    return orignal === reversed;

}

// console.log(isPalindrome(121));  // true
// console.log(isPalindrome(123));  // false
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(121));  // true




// 2. while loop ===> extract last digit then append reversly to create new number then compare


function isPalindrome2(n) {

    if (n < 0) return false;
    let original = n;
    let reversed = 0;
    while (n > 0) {

        const lastDigit = n % 10;

        reversed = reversed * 10 + lastDigit;

        n = Math.floor(n / 10);

    }
    return original === reversed;
}


console.log(isPalindrome2(121));  // true
console.log(isPalindrome2(123));  // false
console.log(isPalindrome2(1221)); // true
console.log(isPalindrome2(-121)); // false
console.log(isPalindrome2(0));    // true