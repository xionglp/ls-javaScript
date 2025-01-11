
var num1 = 5
var num2 = 8
var result1 = num1 + num2

console.log(result1)

var num = 20
var result2 = num % 8 // 取余数
console.log(result2)

console.log(2 ** 4) // 2的四次方
console.log(Math.pow(2, 4))


var num = 123

// 链式赋值
var num1 = (num2 = num3 = 321)
console.log(num1, num2, num3)


var num = 100

num += 10
num *= 10
console.log(num)


// 1. 自增 自减

var currentIndex = 5

// 自增
currentIndex = currentIndex + 1
currentIndex += 1
currentIndex++
console.log(currentIndex)

// 自减
currentIndex--
console.log(currentIndex)


var currentIndex = 5
// 自己自增和自减是没有区别的
// ++currentIndex
// console.log(currentIndex)
// --currentIndex
// console.log(currentIndex)

// 自增和自减的表达式又在其他的表达式中，那就有区别
// var result1 = 100 + currentIndex++ // 先计算100 + currentIndex的result结果， 再计算currentIndex++ 的结果
// console.log(result1, currentIndex) // 105, 6

var result2 = 100 + ++currentIndex
console.log(result2, currentIndex) // 106, 6

// 2. 运算符优先级

var num = 5
var result = 2 + 3 * ++num
console.log(result) // 20


var num1 = 20
var num2 = 30

var isResult = num1 > num2
console.log(isResult)

console.log(num1 == num2)
console.log(num1 !== num2)


// 

var foo1 = 0
var foo2 = ''

// ==运算符, 在类型不相同的情况下, 会将运算元先转成Number的值, 再进行比较(隐式转换)
// null比较特殊: null在进行比较的时候, 应该是会被当成一个对象和原生类型进行比较的
console.log(Number(foo1))
console.log(Number(foo2))
console.log(foo1 == foo2)
// ===运算符，在类型不相同的情况下，直接返回false
console.log(foo1 === foo2)


var info = {
  name: 'xionglp',
  age: 18,
  [Symbol.toPrimitive]() {
    return 123
  },
}

console.log(123 == info)



