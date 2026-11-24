// // // Write a function that searches for an element
// in an array and returns the index, if the
// element is not present then just return -1
//6

function search(a, s) {
    for (let index = 0; index < a.length; index++) {
        if (s === a[index]) {
            return index;
        }
    }
    return -1;
}


const a = [45, 748, 21, 64, 345, 415, 452, 12];

const s = 415;

const result = search(a, s);
console.log("🚀 ~ result:", result);

