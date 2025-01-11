

var score = 99
if (score > 90) {
  console.log('去游乐场玩')
}

// 案例二： 苹果单价5元/斤, 如果购买的数量超过5斤, 那么立减8元
var price = 5
var weight = 7
var totalPrice = price * weight
if (weight > 5) {
  totalPrice -= 8
}
console.log('总价格：', totalPrice)

// 案例三: 播放列表中 currentIndex
// ["鼓楼", "理想", "阿刁"]

var currentIndex = 2

currentIndex++
if (currentIndex === 3) {
  currentIndex = 0
}

// 补充一: 如果if语句对应的代码块, 只有一行代码, 那么{}可以省略
// 案例二: 苹果单价5元/斤, 如果购买的数量超过5斤, 那么立减8元
// 定义一些变量保存数据
var price = 5
var weight = 7
var totalPrice = price * weight

// 2.根据购买的重量, 决定是否 -8
if (weight > 5) totalPrice -= 8

console.log('总价格:', totalPrice)

// 补充二: if (条件判断)
var num = 123 // true
if (num) {
  console.log('num判断的代码执行')
}

// 2. if else
var score = 80
// 条件成立, 专属的代码块
// 条件不成立, 专属的代码块
// if (score > 90) {
//   console.log("去游乐场玩~")
// } else {
//   console.log("哈哈哈哈")
// }

if (score > 90) {
  console.log('去游乐场玩')
} else {
  console.log('去上补习班')
}

// 案例二： 有2个数字，进行比较，获取较大的数字
var num1 = 12 * 6 + 7 * 8 + 7 ** 4
var num2 = 67 * 5 + 24 ** 2
console.log(num1, num2)

var result = 0
if (num1 > num2) {
  result = num1
} else {
  result = num2
}
console.log(result)

// 3. if else if 
var score = prompt('请输入您的分数：')
score = Number(score)

if (score > 90) {
  console.log('您的评级是优秀')
} else if (score > 80) {
  console.log('您的评级是良好')
} else if (score >= 60) {
  console.log('您的评级是及格')
} else {
  console.log('不及格')
}



// 2. 三目运算符
// 案例一: 比较两个数字
var num1 = 12 * 6 + 7 * 8 + 7 ** 4
var num2 = 67 * 5 + 24 ** 2

//三元运算符
var result = num1 > num2 ? num1 : num2
console.log(result)

// 给变量赋值一个默认值
var info = {
  name: 'xionglp',
}

var obj = info ? info : {}
console.log(obj)

var age = Number(prompt('请输入您的年龄：'))
var message = age >= 18 ? '成年人' : '未成年人'
alert(message)




// 3. 逻辑运算符
var chineseScore = 88
var mathScore = 99

//逻辑与： && 并且
// 所有的条件都为true的时候，最总的机构才为true
if (chineseScore > 90 && mathScore > 90) {
  console.log('去游乐场玩')
}

// 2.逻辑或: ||, 或者
// 条件1 || 条件2 || 条件3....
// 只要有一个条件为true, 最终结果就为true
// 案例: 如果有一门成绩大于90, 那么可以吃打1小时游戏
if (chineseScore > 90 || mathScore > 90) {
  console.log('玩一个小时游戏')
}

// // 3.逻辑非: !, 取反
var isLogin = false
if (!isLogin) {
  console.log('跳转到登录页面，进行登录')
}
console.log('正常访问页面')




// 4.switch

// 语法
// switch (表达式/变量) {
//   case 常量1:
//     // 语句
// }

var btnIndex = 2
switch (btnIndex) {
  case 0:
    console.log('点击了上一首')
    break
  case 1:
    console.log('点击了下一首')
    break
  case 2:
    console.log('点击了下一首停')
    break
  default:
    console.log('当前按钮的索引有问题')
    break
}