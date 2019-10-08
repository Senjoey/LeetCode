// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 动态规划 子问题：如果s是回文串，那么xsx也是。f(i,j)为true表达从s[i,j]是回文串
    // 递推式：f(i,j) = f(i+1, j-1) && s[i]==s[j]
    const length = s.length;
    if (length === 0) return "";
    if (length === 1) return s;
    let f = [];
    for (let i=0; i<length; i++) {
        f.push([]);
    }
    // 初始化一个字符的情况和连续两个相同字符的情况
    for (let i=0; i<length; i++) {
        for (let j=0; j<length; j++) {
            if (i === j) f[i][j] = true;
            else if(i+1 === j && s[i] === s[j]) f[i][j] = true;
            else f[i][j] = false;
        }
    }
    // 三个及以上的字符的情况
    for (let i=0; i<length; i++) {
        for (let j=0; j<length; j++) {
            if (j-i>=2) {
                f[i][j] = f[i+1][j-1] && s[i]===s[j];
            }
        }
    }
    let maxLen = 0;
    let left=0, right=0;
    for (let i=0; i<length; i++) {
        for (let j=0; j<length; j++) {
            if (f[i][j]) {
                if (j-i+1 > maxLen) {
                    maxLen = j-i+1;
                    left = i;
                    right = j;
                }
            }
        }
    }
    if (maxLen === 0) return "";
    else return s.slice(left, right+1);
};

var test = function() {
    s='abcba';
    console.log(longestPalindrome(s));
}

test();