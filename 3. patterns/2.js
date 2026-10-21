// for n = 4
// *
// **
// ***
// ****
//9
// ==========================

// i/j 0 1 2 3
// 0   *            for i = 0, j run 1 time (i + 1)
// 1   * *          for i = 1, j run 2 times (i + 1)
// 2   * * *          for i = 2, j run 3 times (i + 1)
// 3   * * * *        for i = 3, j run 4 times (i + 1)


function starPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = " ";

        for (let j = 0; j < i + 1; j++) {
            row = row + "*";
        }
        console.log(row);

    }
}

starPattern(6);