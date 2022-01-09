module.exports = function reverse (n) {
    let result = "";
    let str = String(Math.abs(n));
    for (let i = str.length; i > 0; i--) {
      result = result + str[i-1];
    }
    return Number(result);
}