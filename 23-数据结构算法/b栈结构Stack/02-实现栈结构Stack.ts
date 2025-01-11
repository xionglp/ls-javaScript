import IStack from "./IStack"
// 栈结构: 先进后出规则
// 基于数组实现栈结构
class ArrayStack<T> implements IStack<T> {
  // 定义一个空数组，用于存放元素数据
  private data: T[] = []

  // 添加元素
  push(element: T): void {
    this.data.push(element)
  }

  // 弹出栈顶元素
  pop(): T | undefined {
    return this.data.pop()
  }

  // 瞟一眼栈顶元素， 会返回栈顶元素但是不会更改数组中的内容
  peek() {
    return this.data[this.data.length - 1]
  }

  // 是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // 栈中元素个数
  size(): number {
    return this.data.length
  }
}

export default ArrayStack

export {}