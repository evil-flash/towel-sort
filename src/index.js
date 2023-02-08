module.exports = function towelSort(matrix) {
    let arr = []
    if (arguments.length === 0) return arr
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 != 0) arr.push(...matrix[i].reverse())
        else arr.push(...matrix[i])
    }
    return arr;
}