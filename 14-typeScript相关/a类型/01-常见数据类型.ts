
// 1.变量声明
let message: string = "hello ts"
// console.log('message: ', message)

// 2.number类型
let num1 = 199;

// 3.数组类型
// string[]: 数组类型，并且数组中存放的是字符串
// Array<string>: 数组类型，
let names: Array<string> = ['aaa', 'bbb', 'ccc']
// console.log(names)

// 4.Object
let user = {
  name: 'xionglp',
  age: 18,
  height: 1.88
}
// console.log(user.name)
// console.log(user.age)

// 5.参数 和 返回值
function sum(num1: number, num2: number): number {
  return num1 + num2
}
// console.log(sum(1, 2))

// 6.示例: 解析tool
type LyricType = {
  time: number,
  text: string
}
function parseLyric(lyric: string): LyricType[] {
  const lyrics: LyricType[] = [];
  lyrics.push({time: 20241202, text: 'stay time'})
  return lyrics 
}

const lyricInfos = parseLyric('100')
for (const item of lyricInfos) {
  // console.log(item.time, item.text)
}

// 7.对象类型和函数结合使用
type PointType = {
  x: number,
  y: number,
  z: number
}
function printCoordinate(point: PointType) {
  // console.log('x: ', point.x)
  // console.log('y: ', point.y)
}
printCoordinate({x: 1002, y: 2002, z: 3002})

// 8.any类型: 不限制标识符的任意类型，可以在标识符上进行任意操作
let id: any = 'abc'
id = 123

// 9.unknown类型: 默认情况下在上面进行任意的操作都是非法的
// 要求必须进行类型的校验（缩小），才能根据缩小之后的类型进行对应的操作
let foo: unknown = "aaa"
foo = 123
if (typeof foo === "string") { // 类型缩小
  console.log(foo.length, foo.split(" "))
}

export {}