// 1.typeof 判断
function printID(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.length)
  } else {
    console.log(id)
  }
}

// 2.字面量
type Direction = 'left' | 'right' | 'up' | 'down'
function switchDirection(direction: Direction) {
  if (direction === 'left') {
    console.log('方向左')
  } else if (direction === 'right') {
    console.log("方向右")
  } else if (direction === 'down') {
    console.log("方向下")
  } else if (direction === 'up') {
    console.log("方向上")
  }
}

// 3.判断是否 有某个属性
interface ISwim {
  swim: () => void
}

interface IRun {
  run: () => void
}

function move(animal: ISwim | IRun) {
  if ("swim" in animal) {
    animal.swim()
  } else if ("run" in animal) {
    animal.run()
  }
}

const fish: ISwim = {
  swim: function() {
    console.log("鱼游动")
  }
}
const dog: IRun = {
  run: function() {
    console.log("狗跑动")
  }
}

move(fish)
move(dog)

export {}