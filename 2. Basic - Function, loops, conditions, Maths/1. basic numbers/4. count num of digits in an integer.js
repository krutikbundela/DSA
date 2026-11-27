// count number of digits in an integer

//1. convert into string and count length
//2. while loop ==> remove the last digit and increase count 


// //1. convert into string and count length
function countDigits(number) {
    if (number === 0) {
        return 1;
    }
    const n = Math.abs(number);

    return n.toString().length;

}



console.log(countDigits(12345)); // 5
console.log(countDigits(-456));  // 3
console.log(countDigits(0));     // 1


// //2. while loop
// dividing an integer by 10 and removing the decimal part removes its last digit.



function countDigits2(number) {
    let n = Math.abs(number);
    if (n === 0) {
        return 1;
    }

    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;


    }

    return count;

}





console.log(countDigits2(123424425)); // 5
console.log(countDigits2(-452426));  // 3
console.log(countDigits2(0));     // 1



// 9. Important DSA Pattern to Remember
// This question belongs to the Basic Mathematics — Digit Manipulation pattern.

// There are two extremely important operations that you will repeatedly use in DSA.
// Operation	Purpose	Example

// n % 10	===> Extract the last digit	====> 12345 % 10 = 5

// Math.floor(n / 10) ====>	Remove the last digit ===>	12345 → 1234