// 类型别名 type
type MyNumber = number
const age: MyNumber = 18

// 给Id的类型起一个别名
type IdType = number | string

function printId(id: IdType) {
  console.log(id)
}

// 打印坐标
type PonitType = {x: number, y: number, z?: number}
function printCoordinate(point: PonitType) {
  console.log(point.x, point.y, point.z)
}

// 2.接口 interface
interface PointType2 {
  x: number,
  y?: number,
  z?: number
}

function printCoordinate2(point: PointType2) {
  console.log('坐标: ', point.x, point.y, point.z)
}

// 3.类型别名和接口的区别一: type类型使用范围更广，接口只能声明对象类型,并且interface声明对象可以声明多次
interface PointType2 {
  m: number
}

const point2: PointType2 = {
  x: 100,
  m: 400,
}
console.log('point2: ', point2)

// 4.interface支持继承
interface IPerson {
  name: string,
  age: number
}

interface IStudent extends IPerson {
  id: string
}

const stu: IStudent = {
  name: 'jack',
  age: 18,
  id: '1002'
}
console.log("stu: ", stu)
// 5.总结: 如果是非对象类型的定义使用type类型，如果是对象类型的定义使用interface接口

export {}

