// []{}() 有效的括号，[) 无效的括号
// 解题思路： 重点，一一对应；
// 遍历字符串，遍历到左括号，将对应的右括号添加到栈中。 
// 遍历到右括号，立即将栈中的括号弹出（栈顶数据是否等于这个右括号）
// 如果从栈中弹出的括号 !== 当前的这个右括号， 直接返回false
// 如果遍历到右括号， 栈中没有数据了， 则返回false （说明没有对应的左括号，右括号多了）
// 如果遍历完所有的右括号， 栈中还有数据， 则返回false（说明左括号多了）; 栈中刚好弹出所有的数据了， 则返回true

import ArrayStack from "../2-栈结构Stack/02-实现栈结构Stack"

var isVaild = function(s: string): boolean {
  let stack = new ArrayStack<string>()
  for (let i = 0; i < s.length; i++) {
    const charStr = s[i]
    if (charStr === "(") {
      stack.push(")")
    } else if (charStr === "[") {
      stack.push("]")
    } else if (charStr === "{") {
      stack.push("}")
    } else {
      // if (stack.isEmpty()) return false
      if (charStr !== stack.pop()) return false
    }
  }
  return stack.isEmpty() 
}

// 测试结果
console.log(isVaild("({[]})()"))
console.log(isVaild("{"))
console.log(isVaild(")"))