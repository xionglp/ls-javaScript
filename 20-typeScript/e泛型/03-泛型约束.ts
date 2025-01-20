// 泛型约束
interface ILength {
  length: number
}

function getLength(arg: ILength): number {
  return arg.length
}

const length1 = getLength('abc')
const length2 = getLength(['a', 'b', 'c', 'd'])
const length3 = getLength({length: 12})
console.log(length1)
console.log(length2)

function getInfo<T extends ILength>(arg: T): T {
  return arg
}

const info1 = getInfo('aaa')
const info2 = getInfo(['aaa', 'bbb', 'ccc'])
console.log(info1.length)
console.log(info2.length)

// 泛型参数使用约束
function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key]
}

const obj = {
  name: 'kobe',
  age: 12,
  height: 1.99
}

const objName = getObjectProperty(obj, 'name')
const objHeight = getObjectProperty(obj, 'height')
console.log(objName, objHeight)

export {}