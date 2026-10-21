// for  n = 4 

// * * * *
// * * * *
// * * * *
// * * * *
// 9 
// =========================================

// i = 1 (row)
    // j = 4 times (cols)
// i = 2 (row)    
    // j = 4 times (cols)

// i/j  0 1 2 3
// 0    * * * *
// 1    * * * *
// 2    * * * *
// 3    * * * *

function starPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = " ";
        for (let j = 0; j < n; j++) {
            row = row + "*"
            
        }
        console.log(row);
        
    }
}

starPattern(10);
