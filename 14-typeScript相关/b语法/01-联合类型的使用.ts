// 1.联合类型的基本使用
let foo: number | string = 'abc'
// foo = 123

// 使用的时候应该小心点
if (typeof foo === 'string') {
  console.log(foo.length)
}

// 示例 打印id
function printId(id: string | number) {
  console.log('id: ', id)

  //类型缩小
  if (typeof id === 'string') {
    console.log(id.length)
  } else {
    console.log(id)
  }
}

printId(123)
printId('aaa')

export {}