/*===============================================================*/
/**
 * ### 生成实例对象的原始模式
 * 		1. 假定我们把猫看成一个对象，它有"名字"和"颜色"两个属性。
 * 		2. 生成两个实例对象。
 * - 虽然是最简单的方式，但是有两个明显的缺点
 * 		1. 如果多生成几个实例，写起来就非常麻烦
 * 		2. 实例与原型之间，没有任何办法，可以看出有什么联系
 */
				// var Cat = {
				// 	name:'',
				// 	color:''
				// };

				// var cat1 = {};
				// cat1.name = "大黄";
				// cat1.color = "黄色";

				// var cat2 = {};
				// cat2.name = "老黑";
				// cat2.color = "黑色";
/*===============================================================*/

/**
 * ### 构造函数模式
 * 		> 为了解决从原型对象生成实例的问题，Javascript提供了一个构造函数（Constructor）模式。
 * 		> 所谓"构造函数"，其实就是一个普通函数，但是内部使用了this变量。对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上。
 */

				// function Cat (name,color) {
				// 	this.name = name; 
				// 	this.color = color; 
				// }
				// // 生成实例对象了。
				// var cat1 = new Cat("大黄","黄色");
				// var cat2 = new Cat("小黑","黑色");
				// // 这时cat1和cat2会自动含有一个constructor属性，指向它们的构造函数。
				// alert(cat1.constructor === Cat);  //true
				// alert(cat2.constructor === Cat);  //true

/*===============================================================*/

/**
 * #### Prototype模式
 * 		> Javascript规定，每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。
 */

function Cat(name,color){
	this.name = name;
	this.color = color;
}
Cat.prototype.type = "猫科动物";
Cat.prototype.eat = function(){alert("吃鱼")};

// 实例====这时所有实例的type属性和eat()方法，其实都是同一个内存地址，指向prototype对象，因此就提高了运行效率
var cat1 = new Cat("大毛","黄色");
var cat2 = new Cat("二毛","黑色");
alert(cat1.type); // 猫科动物
cat1.eat(); // 吃老鼠

/**
 * #### Prototype模式的验证方法
 * 		- isPrototypeOf()
 * 			- 某个proptotype对象和某个实例之间的关系
 * 			- alert(Cat.prototype.isPrototypeOf(cat1)); //true
 * 		- hasOwnProperty()
 * 			- 每个实例对象都有一个hasOwnProperty()方法,用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性
 * 			- alert(cat1.hasOwnProperty("name")); // true
 * 			- alert(cat1.hasOwnProperty("type")); // false
 * 		- in运算符
 * 			- 可以用来判断，某个实例是否含有某个属性，不管是不是本地属性
 * 			- alert("name" in cat1); // true
 * 			- alert("type" in cat1); // true
 */
// ===========================================================================================
// 实例分析
/**
 * 现在有一个"动物"对象的构造函数。还有一个"猫"对象的构造函数。怎样才能使"猫"继承"动物"呢？
 */
function Animal(){
	this.species = "动物";
}
function Cat(name,color){
	this.name = name;
	this.color = color;
}
/**
 * #### prototype模式
 * 		- 如果"猫"的prototype对象，指向一个Animal的实例，那么所有"猫"的实例，就能继承Animal了
 */
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物
/**
 * 第一行,将Cat的prototype对象指向一个Animal的实例,
 * 		- 相当于完全删除了prototype 对象原先的值，然后赋予一个新值
 * 第二行又是什么意思呢？
 * 		- 原来，任何一个prototype对象都有一个constructor属性，指向它的构造函数。
 * 		- 如果没有[Cat.prototype = new Animal();]这一行，Cat.prototype.constructor 是指向Cat的；
 * 		- 但是加了这一行以后，Cat.prototype.constructor指向Animal。
 * 所以需要第二行 [Cat.prototype.constructor = Cat;]
 */

/**
 * 更重要的是，每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性。
 * 		- alert(cat1.constructor == Cat.prototype.constructor); // true
 * 	因此，在运行"Cat.prototype = new Animal();"这一行之后，cat1.constructor也指向Animal
 * 		- alert(cat1.constructor == Animal); // true
 *
 * 这显然会导致继承链的紊乱（cat1明明是用构造函数Cat生成的），因此我们必须手动纠正，将Cat.prototype对象的constructor值改为Cat。这就是第二行的意思。 
 */

/**
 * 这是很重要的一点，编程时务必要遵守。下文都遵循这一点，即如果替换了prototype对象
 * 		- o.prototype = {};
 * 那么，下一步必然是为新的prototype对象加上constructor属性，并将这个属性指回原来的构造函数。
 * 		- o.prototype.constructor = o;
 */