// for n = 4
// ****
// ***
// **
// *
//9
// ==========================

// i/j 1 2 3 4
// 4   * * * *      for i = 4, j run 4 times (i = j)
// 3   * * *        for i = 3, j run 3 times (i = j)
// 2   * *          for i = 2, j run 2 times (i = j)
// 1   *            for i = 1, j run 1 time (i = j)


function starPattern(n) {
    for (let i = n; i > 0; i--) {
        let row = " ";
        for (let j = i; j > 0; j--) {
            row = row + "*";
        }
        console.log(row);
    }
}


starPattern(4);