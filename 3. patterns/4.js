// for n = 4

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 9

// ======================================
// i/j 1 2 3 4
// 1   1           for i = 1, j run 1 time prints==> 1        (i = j)
// 2   2 2         for i = 2, j run 2 time prints==> 2 2      (i = j)
// 3   3 3 3       for i = 3, j run 3 time prints==> 3 3 3    (i = j)
// 4   4 4 4 4     for i = 4, j run 4 time prints==> 4 4 4 4  (i = j)



function starPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= i; j++) {
            row = row + i + " ";

        }
        console.log(row);
    }
}

starPattern(5)