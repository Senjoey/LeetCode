/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // 递归解法
  // if (!p && !q) return true
  // if (!p && q) return false
  // if (p && !q) return false
  // if (p && q) {
  //   if (p.val === q.val) {
  //     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  //   } else {
  //     return false
  //   }
  // }

  // 非递归解法，利用队列，层次遍历
  const deqP = [p], deqQ = [q]
  while (deqP.length > 0) {
    p = deqP.shift()
    q = deqQ.shift()
    if (!check(p, q)) return false
    if (p) {
      if (!check(p.left, q.left)) return false
      if (p.left) {
        deqP.push(p.left)
        deqQ.push(q.left)
      }
      
      if (!check(p.right, q.right)) return false
      if (p.right) {
        deqP.push(p.right)
        deqQ.push(q.right)
      }
    }
  }
  return true
};
function check(p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== q.val) return false
  return true
}
const p = new TreeNode(1)
p.right = new TreeNode(2)
p.right.left = new TreeNode(3)

const q = new TreeNode(1)
q.right = new TreeNode(2)
q.right.right = new TreeNode(3)

const res = isSameTree(p, q)
console.log(res)

// @lc code=end

