class Person {
  private _name: string
  private _age: number

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  running() {
    console.log("running ~", this._name)
  }
  
  // setter/getter: 对属性的访问进行拦截操作
  set name(newVal: string) {
    this._name = newVal
  }

  get name() {
    return this._name
  }

  set age(newVal: number) {
    console.log('setage:', newVal)
    if (newVal > 0 && newVal < 200) {
      this._age = newVal
    }
  }

  get age() {
    return this._age
  }
}

const p1 = new Person('kobe', 45)
p1.name = 'james'
console.log(p1.name)

p1.age = -10
console.log(p1.age)

export {}