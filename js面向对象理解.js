/**
 * JavaScript 设计模式 ： 正确使用面向对象编程的姿势
 * https://github.com/pkwenda/blog/issues/1
 * https://github.com/pkwenda/blog/issues/2
 */
/**
 * java中有 private声明的私有变量、 有通过public的getter setter方法进行通信，有static修饰的静态变量，静态方法，有构造器，那么javascript可以使用这样的设计模式么？可以，
 */
/**
 * Smoke 构造器
 * @param {str} id 
 * @param {str} name 
 */
var Smoke = function (id, name) {
  // 私有属性
  var num = 0
  // 私有方法
  function checkID () { return true }
  // 判断this在执行过程中是不是属于Smoke，如果是说明是new过的  0.0
  if (this instanceof Smoke) {
    // 公有属性  （需要new）
    this.id = id
    // 公有 setter getter 构造函数
    this.setName = function (name) {
      this.name = name
    }
    this.getName = function () {
      return this.name
    }
    // 对象的公有属性  （需要new）
    this.information = function () {
      // 只有在Smoke内部才能调用 checkID() 
      if (checkID()) { return this.name + '香烟' + '订单号 :' + this.id }
    }
  } else {
    return new Smoke(id, name) // 内部重新new一个  0.0
  }
}
Smoke.prototype = {
  money: '10元', // 公有属性（不需要new） 直接Smoke.money
  otherOne: function () {
    // --
    return this
  },
  otherTwo: function () {
    // --
    return this
  }
}
var smoke = new Smoke(994857, '煊赫门')
smoke.information() // "undefined香烟订单号 :994857" ps:因为我们没对Smoke的name属性赋值
smoke.setName('煊赫门') // 我们赋值
smoke.information() // "煊赫门香烟订单号 :994857"
smoke.num // undefined ps:很明显他是私有属性
smoke.checkID() // error is not function ps:很明显私有方法
