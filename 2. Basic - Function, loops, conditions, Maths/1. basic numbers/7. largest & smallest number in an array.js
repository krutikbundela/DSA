// Write a function that returns largest/smallest number in an array
//6


// there are 3 methods 

// 1. directly find min max 
// 2. sort the array ==> index[0] will be smallest index[arr.length-1] will be largest
// 3. single loop and compare storing into a variable and swap


// 1. directly find min max 
function largestSmallest1(arr) {
    if (arr.length === 0) {
        return null;
    }

    const smallest = Math.min(...arr);  // Becomes: Math.min(50, 60, 20, 10, 40); // 10
    const largest = Math.max(...arr);

    // console.log("smallest:", smallest);
    // console.log("largest:", largest);

    return { smallest, largest };

}


// const { smallest, largest } = largestSmallest1([50, 60, 20, 10, 40]);
// console.log("smallest:", smallest);
// console.log("largest:", largest);




// ======================================================


// 2. sort the array ==> index[0] will be smallest index[arr.length-1] will be largest
function largestSmallest2(arr) {
    if (arr.length === 0) {
        return null;
    }

    const sortedArr = [...arr].sort((a, b) => a - b);

    const smallest2 = sortedArr[0];
    const largest2 = sortedArr[sortedArr.length - 1];

    // console.log("smallest2:", smallest2);
    // console.log("largest2:", largest2);

    return { smallest2, largest2 };

}


const { smallest2, largest2 } = largestSmallest2([50, 60, 20, 10, 40]);
console.log("smallest2:", smallest2);
console.log("largest2:", largest2);




// ======================================================


// 3. single loop and compare storing into a variable and swap

function largestSmallest3(arr) {
    if (arr.length === 0) {
        return null;
    }
    let smallest3 = arr[0];
    let largest3 = arr[0];;


    for (let index = 0; index < arr.length; index++) {
       
        if (largest3 < arr[index]) {
            largest3 = arr[index];
        }
        if (smallest3 > arr[index]) {
            smallest3 = arr[index];
        }

    }


    console.log("smallest3:", smallest2);
    console.log("largest3:", largest2);

    return { smallest3, largest3 };

}

const { smallest3, largest3 } = largestSmallest3([50, 60, 20, 10, 40]);
console.log("smallest3:", smallest3);
console.log("largest3:", largest3);


