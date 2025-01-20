// 1. 泛型接口
interface IFoo<T> {
  initialValue: T,
  valueList: T[],
  handleValue: (value: T) => void,
}

const foo: IFoo<number> = {
  initialValue: 123,
  valueList: [1, 2, 3],
  handleValue: function(value: number) {
    console.log("value: ", value)
  }
} 

const bar: IFoo<string> = {
  initialValue: 'kobe',
  valueList: ['a', 'b', 'c'],
  handleValue: function(value: string) {
    let tempVal = value + ', ' + value
    console.log('tempVal: ', tempVal)
  }
}

console.log(foo.initialValue, foo.valueList)
foo.handleValue(333)
bar.handleValue('name')

// 2. 泛型类
class Point<T> {
  x: T
  y: T

  constructor(x: T, y: T) {
    this.x = x;
    this.y = y;
  }
}

const p1 = new Point(1, 2)
console.log(p1.x)
const p2 = new Point(100, 200)
console.log(p2.y)

export {}