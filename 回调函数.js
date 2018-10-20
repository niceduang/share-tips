const getRandom = (maxNum, callback) => {
  try {
    let num = Math.random() * maxNum
    callback(null, num)// 约定俗成第一个参数谣传err
  } catch (err) {
    callback(err)// 第二个参数mull此时可以省去
  }
}

let num1 = getRandom(4, (err, num) => {
  // if (err) {
  //   console.log(err)
  //   return null
  // }
  // return num
  if (err) {
    console.log('err')
  } else {
    console.log(num)
  }
})
let num2 = getRandom('abc', (err, num) => {
  // if (err) {
  //   console.log(err)
  //   return null
  // }
  // return num
  if (err) {
    console.log('err')
  } else {
    console.log(num)
  }
})
// console.log({ num1, num2 })