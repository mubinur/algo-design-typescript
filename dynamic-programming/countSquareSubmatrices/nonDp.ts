/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    let sum = 0;
    const visited = [matrix.length];
    visited.forEach(row => []);

    const matrixHelper = function (queue) {
        let index = 0;
        let squareLength = queue.length;
        while (index < queue.length) {
            const { i, j } = queue[index++];

            if (matrix[i] && matrix[i][j]) {
                queue.push({ i: i, j: j + 1 }, { i: i + 1, j: j + 1 }, { i: i + 1, j: j });
            } else break;
            if (index === squareLength) {
                sum++;
                squareLength = queue.length;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j]) {
                matrixHelper([{ i, j }]);
            }
        }
    }

    return sum;
};