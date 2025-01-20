// 泛型
function bar<Type>(arg: Type): Type {
  return arg
}

const res1 = bar<number>(123)
console.log(res1)
const res2 = bar<string>('name111')
const res3 = bar<boolean>(true)
console.log(res3)

// useState函数
function useState<T>(initialState: T): [T, (newState: T) => void] {
  let state = initialState;
  function setState(newState: T) {
    state = newState
  }
  return [state, setState]
}

const [count, setCount] = useState(100)
console.log(count, setCount)

// 传入多个类型
function foo<T, E>(arg: T, message: E) {
  console.log(arg, message)
}

foo(100, 'name')

export {}