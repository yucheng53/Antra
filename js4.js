//* ~~~~~~~~~~~~~~ Day 4 ~~~~~~~~~~~~~~
//~ callback function & callback hell
// const foo = () => console.log("foo");
// const getRendomTime = () => Math.floor(Math.random() * 6);

// const callFunInRandomTime = (callback) => {
// 	const timer = getRendomTime();
// 	console.log(`wait for ${timer}s`);

// 	setTimeout(callback, timer * 1000);
// };
// callFunInRandomTime(() => {
//   callFunInRandomTime(() => {
//     callFunInRandomTime(() => {
//       callFunInRandomTime(() => {
//         callFunInRandomTime(() => {
//           callFunInRandomTime(() => {
//             callFunInRandomTime(() => {
//               callFunInRandomTime(() => {
//                 callFunInRandomTime(() => {
//                   callFunInRandomTime(foo);
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// const getTodo = (id) => {
// 	const baseUrl = "https://jsonplaceholder.typicode.com/todos";

// 	return new Promise((resolve, reject) => {

//         var xhttp = new XMLHttpRequest();
// 		xhttp.onreadystatechange = function () {
// 			if (this.readyState == 4 && this.status == 200) {
// 				resolve(JSON.parse(xhttp.response));
// 			}
// 		};
// 		xhttp.open("GET", baseUrl + "/" + id);
// 		xhttp.send();
// 	});
// };

// getTodo(12)
// 	.then((data) => {
// 		console.log(data);
// 		return getTodo(22); // 4
// 	})
// 	.then((data) => {
// 		console.log(data);
// 		return getTodo(32);
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	});

// //~ async await
// (async () => {
//   try {
//     // const todo12 = await getTodo(12); // 4
//     // console.log(todo12);

//     // const todo22 = await getTodo(22);  //2
//     // console.log(todo22);

//     // const todo32 = await getTodo(32); // 3
//     // console.log(todo32);

//     const arr = [getTodo(12), getTodo(22), getTodo(32)];
//     const values = await Promise.all(arr);

//     console.log(values);

//   } catch (error) {
//     console.log(error);
//   }
// })(); // 4

//~ Promise & MyPromise
class MyPromise {
	thencbqueue = [];
	currentdata = undefined;

	constructor(executer) {
		executer(this.resolve.bind(this), this.reject);
	}

	resolve(resdata) {
		setTimeout(() => {
			this.currentdata = resdata;
			while (this.thencbqueue.length) {
				const cb = this.thencbqueue.shift();
				this.currentdata = cb(this.currentdata);
			}
		}, 0);
	}
	reject = () => {};

	then(thencb) {
		this.thencbqueue.push(thencb);
		return this;
	}

	catch() {}
}

new MyPromise((resolve, reject) => {
	console.log("hello");
	resolve(123);
})
	.then((data) => {
		console.log(data);
		return 345;
	})
	.then((data12) => console.log(data12));

console.log("world");

// ^ youtube promise
// const status = {
// 	PENDING: "pending",
// 	FULFILLED: "fulfilled",
// 	REJECTED: "rejected",
// };

// const isThenable = (maybePromise) =>
// 	maybePromise && typeof maybePromise.then === "function";

// class MyPromise {
// 	#status = status.PENDING;
// 	#value = undefined;
// 	#reason = undefined;
// 	#thenQueue = [];
// 	#finallyQueue = [];

// 	constructor(executor) {
// 		if (typeof executor === "function") {
// 			try {
// 				executor(this.#resolve.bind(this), this.#reject.bind(this));
// 			} catch (err) {
// 				this.#reject(err);
// 			}
// 		}
// 	}

// 	#propagationResolved() {
// 		setTimeout(() => {
// 			this.#thenQueue.forEach(([controlledPromise, fulfilledFn]) => {
// 				if (typeof fulfilledFn === "function") {
// 					const valueOrPromise = fulfilledFn(this.#value);

// 					if (isThenable(valueOrPromise)) {
// 						valueOrPromise.then(
// 							(value) => controlledPromise.#resolve(value),
// 							(reason) => controlledPromise.#reject(reason)
// 						);
// 					} else {
// 						controlledPromise.#resolve(valueOrPromise);
// 					}
// 				} else {
// 					return controlledPromise.#resolve(this.#value);
// 				}
// 			});

// 			this.#finallyQueue.forEach(([controlledPromise, sideEffectFn]) => {
// 				sideEffectFn();
// 				controlledPromise.#resolve(this.#value);
// 			});

// 			this.#thenQueue = [];
// 			this.#finallyQueue = [];
// 		});
// 	}

// 	#propagationRejected() {
// 		setTimeout(() => {
// 			this.#thenQueue.forEach(([controlledPromise, _, catchFn]) => {
// 				if (typeof catchFn === "function") {
// 					const valueOrPromise = catchFn(this.#reason);

// 					if (isThenable(valueOrPromise)) {
// 						valueOrPromise.then(
// 							(value) => controlledPromise.#resolve(value),
// 							(reason) => controlledPromise.#reject(reason)
// 						);
// 					} else {
// 						controlledPromise.#resolve(valueOrPromise);
// 					}
// 				} else {
// 					return controlledPromise.#reject(this.#reason);
// 				}
// 			});

// 			this.#finallyQueue.forEach(([controlledPromise, sideEffectFn]) => {
// 				sideEffectFn();
// 				controlledPromise.#reject(this.#value);
// 			});

// 			this.#thenQueue = [];
// 			this.#finallyQueue = [];
// 		});
// 	}

// 	#resolve(value) {
// 		if (this.#status === status.PENDING) {
// 			this.#status = status.FULFILLED;
// 			this.#value = value;
// 			this.#propagationResolved();
// 		}
// 	}
// 	#reject(reason) {
// 		if (this.#status === status.PENDING) {
// 			this.#status = status.REJECTED;
// 			this.#reason = reason;
// 			this.#propagationRejected();
// 		}
// 	}

// 	then(fulfilledFn, catchFn) {
// 		const controlledPromise = new MyPromise();
// 		this.#thenQueue.push([controlledPromise, fulfilledFn, catchFn]);

// 		if (this.#status === status.FULFILLED) {
// 			this.#propagationResolved();
// 		} else if (this.#status === status.REJECTED) {
// 			this.#propagationRejected();
// 		}

// 		return controlledPromise;
// 	}

// 	catch(catchFn) {
// 		return this.then(undefined, catchFn);
// 	}

// 	finally(sideEffectFn) {
// 		if (this.#status !== status.PENDING) {
// 			sideEffectFn();

// 			return this.#status === status.FULFILLED
// 				? MyPromise.resolve(this.#value)
// 				: MyPromise.reject(this.#reason);
// 		}

// 		const controlledPromise = new MyPromise();
// 		this.#finallyQueue.push([controlledPromise, sideEffectFn]);

// 		return controlledPromise;
// 	}

//& static functions in the class
// 	static resolve(resval) {
// 		return new MyPromise((res, _) => {
// 			res(resval);
// 		});
// 	}
// 	static reject(rejval) {
// 		return new MyPromise((_, rej) => {
// 			rej(rejval);
// 		});
// 	}
//   static all(promiseArr) {
//     const resolvedArr = new Array(promiseArr.length);
//     let counter = 0;

//     return new MyPromise((res, rej) => {
//       promiseArr.forEach((prom, i) => {
//         if (prom instanceof MyPromise) {
//           prom.then(data => {
//             resolvedArr[i] = data;
//             counter++;
//             if (counter === promiseArr.length) {
//               res(resolvedArr);
//             }
//           });
//         } else {
//           resolvedArr[i] = prom;
//           counter++;
//           if (counter === promiseArr.length) {
//             res(resolvedArr);
//           }
//         }
//       });
//     });
//   }
// }

// const promise1 = MyPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new MyPromise((resolve, reject) => {
// 	setTimeout(resolve, 100, "foo");
// });

// MyPromise.all([promise1, promise2, promise3]).then((values) => {
// 	console.log(values);
// });
// // expected output: Array [3, 42, "foo"]

//call stack: [then]
// task queue: 123 => {}

//~ fetch & myFetch

// const baseUrl = "https://jsonplaceholder.typicode.com/posts";

// const myFetch = (url, options) => {
// 	return new Promise((resolve, reject) => {
// 		const method = options && options.method ? options.method : "GET";

// 		const xhttp = new XMLHttpRequest();
//     xhttp.open(method, url);

//     if (options && options.headers) {
//       Object.entries(options.headers).forEach(([key, value]) => {
//         xhttp.setRequestHeader(key, value);
//       });
//     }    

// 		xhttp.onreadystatechange = function () {
// 			if (this.readyState === 4 && this.status >= 200 && this.status < 300) {
// 				resolve({
// 					json() {
// 						return JSON.parse(xhttp.response);
// 					},
// 				});
// 			}
// 		};

// 		options && options.body ? xhttp.send(options.body) : xhttp.send();
// 	});
// };

// myFetch(baseUrl, {
// 	method: "POST",
// 	body: JSON.stringify({
// 		title: "foo",
// 		body: "bar",
// 		userId: 1,
// 	}),
// 	headers: {
// 		"Content-type": "application/json; charset=UTF-8",
// 	},
// })
// 	.then((response) => response.json())
// 	.then((json) => console.log(json));

// myFetch(baseUrl)
//   .then((response) => response.json())
//   .then((json) => console.log(json));