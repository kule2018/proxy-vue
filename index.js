var createData = require('./data.js')

var obj = createData({
  a: 1
})

obj.a = 2
console.log(obj.a)