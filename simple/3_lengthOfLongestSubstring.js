/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 使用动态规划求解
    // f(i)表示终止位置为i的子串的无重复字符的最长子串的长度
    // f(0)=1, 如果位置为i的字符不在前面的字符串中,f(i) = f(i-1)+1; 如果在,f(i)=1
    const strLen = s.length;
    if (strLen === 0) return 0;
    const f = [1];
    let start = 0;
    for (let i=1; i<strLen; i++) {
        const subStr = s.slice(start, i);
        let idx = subStr.indexOf(s[i]);
        if (idx === subStr.length-1) start = i;
        else if (idx > -1) start = idx + 1 + start;
        let temp = idx>-1 ? (subStr.length-idx) : (f[i-1]+1);
        f.push(temp);
    }
    return Math.max.apply(null, f);
};

var test = function() {
    // "pwwkew" "dvdf" "abcabcbb" wobgrovw abba

    const s='abba';
    const ans = lengthOfLongestSubstring(s);
    console.log(ans);
}

test();