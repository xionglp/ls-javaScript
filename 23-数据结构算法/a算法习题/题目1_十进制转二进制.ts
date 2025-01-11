import ArrayStack from "../b栈结构Stack/02-实现栈结构Stack"

function decimalToBinary(decimal: number): string {
  let stack = new ArrayStack<number>()
  // 如何使用循环： 
  // 1.数据的长度固定,知道循环的次数使用for循环, 2.不知道循环的次数,只知道循环的结束条件使用while循环
  // 解题思路: 对十进制的数字一直 % 2，将余数push到栈中，当十进制的数字等于0的时候就停止，
  // 将栈中的余数依次弹出来，拼接成一个string，
  while(decimal > 0) {
    const result = decimal % 2
    stack.push(result)
    decimal = Math.floor(decimal / 2)
  }

  let binary = ''
  while(!stack.isEmpty()) {
    binary += stack.pop()
  }
  return binary
}

// 测试结果
console.log(decimalToBinary(35))
console.log(decimalToBinary(100))