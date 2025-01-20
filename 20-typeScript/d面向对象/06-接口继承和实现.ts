// 接口和类一样支持继承，使用extends关键字，并且接口还可以实现多继承
interface Person {
  name: string,
  eatting: () => void
}

interface Animal {
  running: () => void
}

interface Student extends Person, Animal {
  sno: number
}

const s1: Student = {
  sno: 10002,
  name: 'zhangsan',
  eatting: function() {
    console.log('吃饭动作')
  },
  running: function() {
    console.log('跑步动作')
  }
}
console.log('s1:', s1)
s1.eatting()



// 接口的实现: 如果被一个类实现， 那么在之后需要传入接口的地方，都可以将这个类传入； 这就是面向接口开发
interface ISwim {
  swimming: () => void
}

interface IRun {
  running: () => void
}

class Dog implements ISwim, IRun {
  swimming() {
    console.log("swimming~")
  }
  running() {
    console.log("running~")
  }
}

function swim(swimmer: ISwim) {
  swimmer.swimming()
}

const dog01 = new Dog()
swim(dog01)

export {}