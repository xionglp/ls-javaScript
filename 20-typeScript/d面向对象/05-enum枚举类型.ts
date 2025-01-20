enum Direction {
  LEFT = 1,
  RIGHT,
  TOP,
  BOTTOM
}

const d1:Direction = Direction.LEFT

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT: 
      console.log('向左移动')
      break;
    case Direction.RIGHT: 
      console.log("向右移动")
      break
    default:
      break;
  }
}

turnDirection(Direction.RIGHT)

export {}