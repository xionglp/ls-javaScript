interface IPerson {
  name: string
  age: number
}

const obj: IPerson = {
  name: 'obj',
  age: 33, 
  // height: 1.90,
}

// 下面这种情况就不会报错，不会严格检测对象字面量的属性
// 第一次创建字面量对象时，会严格检测属性，当类型断言或者对象字面量类型扩大时，就不会再检测。
const obj1 = {
  name: 'xionglp',
  age: 18,
  height: 1.88
}

const info: IPerson = obj1

function printPerson(person: IPerson) {}
const kobe = {
  name: 'kobe',
  age: 22,
  height: 1.98
}
printPerson(kobe)

export {}