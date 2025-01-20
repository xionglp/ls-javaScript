// 交叉类型: 俩种或者多种类型同时满足
type newType = string & number // 没有意义

interface IStudent {
  name: string,
  id: string
}

interface ICoder {
  name: string,
  coding: () => void
}

// 交叉类型
type InfoType = IStudent & ICoder

const info: InfoType = {
  name: 'jack',
  id: '10000110',
  coding: function() {
    console.log('~coding')
  }
}
console.log(info) 
info.coding()

// 非空类型断言 !
function printMessage(message?: string) {
  // 表明确定某个标识符是有值， 跳过ts在编译阶段对它的检测。
  console.log(message!.toUpperCase())
}

export {}

