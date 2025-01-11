// 1. String转换: 基本数据类型 + "" => String
var num1 = 123
var age = 18
var isAdmin = true
var num1Str = num1 + ''
var ageStr = age + ''
var isAdminStr = isAdmin + ''
console.log(typeof num1Str, typeof ageStr, typeof isAdminStr)

// 2. Number类型转换
var num1 = '8'
var num2 = '4'
var result1 = num1 + num2
console.log(result1, typeof result1) // "84" string

// 隐式转换
var result2 = num1 * num2
console.log(result2) // 32
var result3 = Number(num1)
console.log(typeof result3) // number

//其他类型转成Number类型的规则：
console.log(Number(undefined)) // NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number('   123  ')) // 123
console.log(Number('')) // 0

// 3. Boolean类型转换
var isAdmin = true
var num1 = 123
console.log(Boolean(num1), Boolean(undefined)) // true false
console.log(Boolean('')) // false
console.log(Boolean('0')) // true

