// Write a function that returns the number of
// negative numbers in an array
//6

function returnNegativeNumber(arr) {
    let count = 0;
    let neg = [];
    for (let i = 0; i < arr.length; i++) {
     if (arr[i] < 0) {
       count++;
       neg.push(arr[i]);
     }
    }
   
    console.log(`total negatives: ${count}`);
    console.log(`negatives: ${neg}`);
     
   }

returnNegativeNumber([-1,,534,534,76,-2,354,-3,656,56,0,56,1,-3]);


















































