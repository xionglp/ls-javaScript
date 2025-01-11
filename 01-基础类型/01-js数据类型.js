// js变量注意事项

// 注意事项一： 如果一个变量未声明就直接使用，那么会直接报错
// 注意事项二： 如果一个变量有声明，但是没有赋值操作
var info
console.log(info)
// 注意事项三：在JS中也可以不使用var在全局声明一个变量（不推荐）
// 如果不使用var来进行声明一个变量，也是可以声明成功的，并且这个变量会加在window全局对象中
address = '广州市'
console.log(address)



// 2. typeof操作符
var info2 = 'xionglp'
var age
var address = null
var result = (2 + 3) * 4

console.log(typeof info2) // string
console.log(typeof age) // undefined
console.log(typeof address) // object
console.log(typeof result) // number



// 3. Number类型
var age = 18
var height = 1.88
var num1 = Infinity // 无穷大
var num2 = 1 / 0
var result = 3 * 'abc'

console.log(num1, num2) // Infinity infinity
console.log(result) // NaN

// 进制表示
var num3 = 100
var num4 = 0x100 // 16进制
var num5 = 0o100 // 8进制
var num6 = 0b100 // 2进制
console.log(num4, num5, num6)

// 数字可以表示的范围
var max = Number.MAX_VALUE
var min = Number.MIN_VALUE
console.log(min, max)



// 4. String类型
var name = 'xionglp'
var message = `Hello World, ${name}, ${2 + 4}`
console.log(message)
console.log(message.length)

//字符串操作
var nickName = 'xionglp'
var info = 'my name is '
var infoStr = `my name is ${nickName}`
var infoStr2 = info + nickName
console.log(infoStr, infoStr2)


// 5. Boolean类型
var isLogin = true
var isAdmin = false


// 6.Undefined类型
var message
var info = undefined // 未定义类型
console.log(message, info)



// 7. Object和Null
var person = {
  name: 'xionglp',
  age: 18,
  height: 1.99,
}
console.log(person)
console.log(person.name)

var book = null
console.log(typeof book) // object
console.log(typeof null) // object