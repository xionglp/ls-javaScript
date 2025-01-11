// 1. while循环

var i = 5
while (i > 7) {
  console.log('hello world')
}

// 练习一： 打印10次hello world
// var count = 0
// while (count < 10) {
//   console.log('hello world')
//   count++
// }

// 练习二: 打印0~99的数字
// var count = 0
// while (count < 100) {
//   console.log(count)
//   count1++
// }

// 练习三： 计算0~99的和
// var count = 0
// var sum = 0
// while (count < 100) {
//   sum += count
//   count++
// }
// console.log('总数：', sum)

// 练习四： 计算0~99的奇数的和
// var count = 0
// var totalCount = 0
// while (count < 100) {
//   if (count % 2 !== 0) {
//     totalCount += count
//   }
//   count++
// }
// console.log('所有奇数的和：', totalCount)

// 练习五： 计算0~99的偶数的和
var count = 0
var totalCount = 0
// while (count < 100) {
//   if (count % 2 === 0) {
//     totalCount += count
//   }
//   count++
// }
while (count < 100) {
totalCount += count
count += 2
}
console.log('所有偶数的和：', totalCount)


// 2. do...while循环
// do...while语法结构
// do {

// } while(条件)

// 练习一： 打印10次hello world
var count = 0
do {
  console.log('hello world')
  count++
} while (count < 10)

// 练习二: 计算0~99的数字和
var i = 0
var sum = 0
do {
  sum += i
  i++
} while (i < 100)
console.log('总数和：', sum)




// 3. for循环
for (i = 0; i < 10; i++) {
  console.log('hello world')
}

// for (i = 0; i < 100; i++) {
//   console.log(i)
// }

// 0~99的和
// var totalCount = 0
// for (i = 0; i < 100; i++) {
//   totalCount += i
// }
// console.log('总数和: ', totalCount)

// 4.0~99的奇数和
var totalCount = 0
// for (i = 0; i < 100; i++) {
//   if (i % 2 !== 0) {
//     totalCount += i
//   }
// }

for (i = 0; i < 100; i += 2) {
  totalCount += i
}
console.log('所有奇数的和: ', totalCount)


// 示例


var names = ['abc', 'cba', 'nba', 'mba', 'bba', 'aaa', 'bbb']

// break关键字的使用
// 需求： 遇到nba时，不在执行后面的迭代
for (let i = 0; i < names.length; i++) {
  const element = names[i]
  if (element === 'nba') break
}

// continue关键字的使用：立刻结束本次循环，执行下一次循环（step）
// 需求： 不打印nba
for (let i = 0; i < names.length; i++) {
  const element = names[i]
  if (element === 'nba') continue
  console.log(element)
}

// Math.random; 随机数区间：[0, 1)
for (let i = 0; i < 100; i++) {
  var randomNum = Math.random() * 100
  randomNum = Math.floor(randomNum) // 向下取整
  console.log(randomNum)
}



// 随机生成0~99的随机数
var count = 2
var randomNum = Math.floor(Math.random() * 100)
for (var i = 0; i < count; i++) {
  var inputNum = Number(prompt('请输入您猜测的数字：'))

  if (inputNum === randomNum) {
    alert('恭喜您，猜对了')
  } else if (inputNum < randomNum) {
    alert('您猜大了')
  } else {
    alert('您猜小了')
  }

  if (i === count - 1) {
    alert('您的次数已经用完了')
  }
}
