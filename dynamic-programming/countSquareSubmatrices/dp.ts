/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][0]
    }

    for (let i = 1; i < matrix[0].length; i++) {
        sum += matrix[0][i]
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (!matrix[i][j]) continue;
            matrix[i][j] = matrix[i][j] + Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]);
            sum += matrix[i][j];
        }
    }
    return sum;


};