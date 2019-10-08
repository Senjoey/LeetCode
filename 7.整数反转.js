/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 每次取整数的最后一位，赋值给结果的最后一位
    let res = 0
    let handleNum = x < 0 ? -x : x
    let maxIntVal = Math.pow(2, 31)-1
    let minIntVal = Math.pow(2, 31)
    while (handleNum > 0) {
        let digit = handleNum % 10
        if (x < 0 && res > parseInt((minIntVal-digit)/10)) return 0
        if (x > 0 && res > parseInt((maxIntVal-digit)/10)) return 0
        res = res * 10 + digit
        handleNum = parseInt(handleNum / 10)
    }
    return x > 0 ? res : -(res)
};
let x = 123
console.log(reverse(x))