// 1.参数可选类型
// num2 就是number | undefined
function foo(num1: number, num2?: number) {
  console.log('num:', num1, num2)
}

// 2.默认参数
function foo2(num1: number, num2: number = 5) {
  console.log('num:', num1, num2)
}
foo2(4)

// 3.剩余参数: 将一个不定数量的参数放到一个数组中
function sum(...nums: number[]) {
  let total = 0;
  for (const num of nums) {
    total += num
  }
  return total;
}

console.log(sum(10, 20, 30))
console.log(sum(10, 20, 30, 40))


export {}