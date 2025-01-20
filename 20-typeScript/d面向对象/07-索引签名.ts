// 1. 索引签名理解
// 索引签名：可以通过字符串索引，去获取一个值， 也是一个字符串
interface InfoType {
  [key: string]: string
}

function getInfo(): InfoType {
  const aaa: any = 'haha'
  return aaa
}

const info = getInfo()
console.log(info.name, info.eee, info)

// 案例1
interface Icollection {
  [index: number]: string
  length: number
}
function printCollection(collection: Icollection) {
  for (let i = 0; i < collection.length; i++) {
    const item = collection[i];
    console.log(item.length, item)
  }
}

const array = ['aaa', 'bbb', 'ccc']
const tuple = ['kobe', 'guangzhou']
printCollection(array)
printCollection(tuple)

export {}