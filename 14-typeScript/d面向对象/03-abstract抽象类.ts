// 1. 参数属性: 在构造函数前添加一个可见的修饰符或者readonly来创建参数属性，
class Person {
  constructor(public name: string, private _age: number) {
    this.name = name;
    this._age = _age;
  }

  set age(newVal: number) {
    this._age = newVal
  }

  get age() {
    return this._age
  }

  running() {
    console.log("running ~ ", this.name, this._age)
  }
}

const p1 = new Person("james", 50)
p1.age = 33
p1.running()


// 2.abstract 抽象类
// 抽象类， 前面加上abstract
abstract class Shape {
  // 抽象方法， 必须存放在抽象类中，前面加上abstract， 
  // 抽象方法在抽象类中只有声明，没有实现体，让子类去实现
  abstract getArea()
}

class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }

  getArea() {
    return Math.PI * this.radius ** 2 
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }

  getArea() {
    return this.width * this.height;
  }
}

function calcArea(shape: Shape) {
  return shape.getArea()
}

calcArea(new Circle(10))
calcArea(new Rectangle(10, 25))


export {}