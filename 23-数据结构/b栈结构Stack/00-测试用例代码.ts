import ArrayStack from "./02-实现栈结构Stack";

// 测试栈
let sta1 = new ArrayStack<string>()
sta1.push("aaa")
sta1.push("bbb")
sta1.push("ccc")
console.log(sta1)

let sta2 = new ArrayStack<number>()
sta2.push(112)
sta2.push(123)
console.log(sta2)