// 浅拷贝：如果属性时基本类型拷贝的事值， 如果是引用类型拷贝的则是内存地址
function shallowClone(obj) {
  const newObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

// 代码测试
var a = {
  count: 11,
  deep: {
    count: 12
  }
}

var b = Object.assign({}, a)
var c = {...a}
var d = shallowClone(a)
console.log(a, b, c, d)
console.log(a === d)
