const init = (m, ms = 500) => {
	let promise = new Promise((resolve, reject) => {
		setTimeout(resolve, ms, m)
	})
	return promise
}
// let p1 = init(110)
// let p2 = init(120, 1000)

// // 链式
// p1.then(m => {
// 		console.log(m)
// 		return p2
// 	})
// 	.then(res => {
// 		console.log(res)
// 	})

// // all
// Promise.all([p1, p2]).then(res => {
// 	console.log(res)
// })

// // race
// Promise.race([p1, p2]).then(res => {
// 	console.log(res)
// })

// async
const run = async () => {
	let p1 = await init(1)
	console.log({
		p1
	})
	try {
		let p2 = await init(2, 1000)
		console.log({
			p2
		})
	} catch (e) {
		console.log(e)
	}
}
run()

// 异步处理-Promise的方式重构
{
	let getKeyPromise = function () {
		return new Promsie(function (resolve, reject) {
			$.ajax({
				type: 'get',
				url: 'http://localhost:3000/apiKey',
				success: function (data) {
					let key = data
					resolve(key)
				},
				error: function (err) {
					reject(err)
				}
			})
		})
	}
	let getTokenPromise = function (key) {
		return new Promsie(function (resolve, reject) {
			$.ajax({
				type: 'get',
				url: 'http://localhost:3000/getToken',
				data: {
					key: key
				},
				success: function (data) {
					resolve(data)
				},
				error: function (err) {
					reject(err)
				}
			})
		})
	}

	let getDataPromise = function (data) {
		let token = data.token
		let userId = data.userId

		return new Promsie(function (resolve, reject) {
			$.ajax({
				type: 'get',
				url: 'http://localhost:3000/getData',
				data: {
					token: token,
					userId: userId
				},
				success: function (data) {
					resolve(data)
				},
				error: function (err) {
					reject(err)
				}
			})
		})
	}
	getKeyPromise()
		.then(function (key) {
			return getTokenPromise(key)
		})
		.then(function (data) {
			return getDataPromise(data)
		})
		.then(function (data) {
			console.log('业务数据：', data)
		})
		.catch(function (err) {
			console.log(err)
		})
}

// 异步处理-Async/Await的方式重构
{
	let getKeyPromise = function () {
		return new Promsie(function (resolve, reject) {
			$.ajax({
				type: 'get',
				url: 'http://localhost:3000/apiKey',
				success: function (data) {
					let key = data
					resolve(key)
				},
				error: function (err) {
					reject(err)
				}
			})
		})
	}
	let getTokenPromise = function (key) {
		return new Promsie(function (resolve, reject) {
			$.ajax({
				type: 'get',
				url: 'http://localhost:3000/getToken',
				data: {
					key: key
				},
				success: function (data) {
					resolve(data)
				},
				error: function (err) {
					reject(err)
				}
			})
		})
	}
	let getDataPromise = function (data) {
		let token = data.token
		let userId = data.userId

		return new Promsie(function (resolve, reject) {
			$.ajax({
				type: 'get',
				url: 'http://localhost:3000/getData',
				data: {
					token: token,
					userId: userId
				},
				success: function (data) {
					resolve(data)
				},
				error: function (err) {
					reject(err)
				}
			})
		})
	}
	async function main() {
		let key = await getKeyPromise()
		let loginData = await getTokenPromise(key)
		let busiData = await getDataPromise(loginData)

		console.log('业务数据：', busiData)
	}
	main()
	console.log('不影响主线程执行')
}


// 可以看到，使用Async/Await，完全就是同步的书写方式，
// 逻辑和数据依赖都非常清楚，只需要把异步的东西用Promise封装出去，然后使用await调用就可以了