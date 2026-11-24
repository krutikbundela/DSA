//IMP
//write a func to find the second largest number

// 1. sort decending and arr[1] will be sec.largest
// 2. single loop find largest and second largest



// 1. sort decending and arr[1] will be sec.largest


function secondLargest(arr) {
    if (arr.length < 0) {
        return null
    }

    const sortedArr = [...arr].sort((a, b) => b - a);

    return sortedArr[1];

}

const secondLargest1 = secondLargest([32, 15, 234, 54, 56, 90, 87]);


console.log(secondLargest1);



// 2. single loop find largest and second largest

function secondLargest23(arr) {
    if (arr.length < 0) {
        return null
    }

    let largest = -Infinity;
    let secondLargest2 = -Infinity;

    for (let index = 0; index < arr.length; index++) {

        //assign prev largest to sec.largest if we found new largest 
        if (largest < arr[index]) {
            secondLargest2 = largest;
            largest = arr[index];
        }


        // if node is smaller than larger but greater than sec.large
        if (arr[index] < largest && arr[index] > secondLargest2) {
            secondLargest2 = arr[index];
        }

    }
    return secondLargest2;


}

const secondLargest2 = secondLargest23([32, 15, 234, 54, 56, 90, 87]);


console.log(secondLargest2);

