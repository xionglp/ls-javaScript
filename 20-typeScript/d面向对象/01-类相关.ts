class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  running() {
    console.log(this.name + ' running')
  }

  eatting() {
    console.log(this.name + ' eatting')
  }
}

const p1 = new Person('jack', 18)
const p2 = new Person('james', 34)

p1.running()
p2.eatting()

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }

  studying() {
    console.log(this.name + ' ~ 学习')
  }
}

const stu1 = new Student('lixiaoming', 30)
stu1.studying()

// 成员修饰符 
// public 公有属性
// protected 受保护的属性或方法，在自身类或者子类可以访问
// private 私有属性

// readonly: 只读属性，不希望外界修改他

export {}