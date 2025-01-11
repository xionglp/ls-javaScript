// (参数列表) => 返回值
type BarType = (ag: number) => number      
const bar = (arg: number): number => {
  return arg
}

bar(111)

// 函数的定义
type CalcFn = (num1: number, num2: number) => number
function calc(calaFn: CalcFn) {
  const num1 = 10;
  const num2 = 20;
  const res = calaFn(num1, num2)
  console.log("res:", res);
}

function sum(num1: number, num2: number) {
  return num1 + num2  
}

function foo(num1: number){
  return num1
}

function mul(num1: number, num2: number) {
  return num1 * num2;
}

calc(sum)
calc(foo)
calc(mul)

//匿名函数
calc(function(num1: number, num2: number) {
  return num1 - num2;
})

// TypeScript对于传入的函数类型的多余参数会被忽略掉
const names = ['aaa', 'nnn', 'mmmm']
names.forEach(function(item) {
  console.log(item.length)
})

// 构造函数


export {}