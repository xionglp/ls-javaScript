// 基于数组实现栈结构
class ArrayStack {
  // 定义一个空数组，用于存放元素数据
  private data: any[] = []

  // 添加元素
  push(element: any): void {
    this.data.push(element)
  }

  // 弹出栈顶元素
  pop(): any {
    return this.data.pop()
  }

  // 瞟一眼栈顶元素， 会返回栈顶元素但是不会更改数组中的内容
  peek() {
    return this.data[this.data.length - 1]
  }

  // 是否为空
  isEmpty(): any {
    return this.data.length === 0
  }

  // 栈中元素个数
  size(): any {
    return this.data.length
  }
}

// TS默认所有代码都在一个作用域中，添加这句代码给文件增加一个作用域
export {}