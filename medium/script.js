// 1 задание

/* let guest = +prompt('Сколько гостей?')

if (guest%2) {
	alert(`Пете нужно: ${guest} разрезов`)
} else {
	alert(`Пете нужно: ${guest / 2} разрезов`)
} */

// 2 задание

/* let appels = +prompt('Сколько яблок?')
let children = 3;

console.log(appels%children);


 if (appels%children) {
	alert('Нельзя делит поровну!')
} else {
	alert('Можно разделить разделить поровну!')
} */


////////////3 задание

/* let a = 300;
let b = 100;
let c = 100;

if (a + b > c) {
	console.log('Да')
} else if (c + b > a ) {
	console.log('Да')
} else {
	console.log('Нет')
} */



/// 4 задание 

let a = 100;
	b = 100;
	c = 100;


if (a == b && b == c) {
	console.log("Равносторонний треуголник")
}else if (a + b < c || c + a < b || c + b < a) {
		console.log("Несуществующий треуголник")
}else if (a == b || b == c || a == c) {
	console.log("Равнобедренный треуглоник")
} else if (a !== b && b !== c && a + b > c && b + c > a) {
	console.log("Разносторонний труголник")
} 

// 5 задание

let weigth = 0.5;
let country = 'USA';//other

if ( weigth <= 1) {
	console.log('10$')
} else if (weigth > 1 && weigth <= 5 && country == 'USA') {
	console.log('20$')
}else if (weigth > 1 && weigth <= 5 && country == 'other') {
	console.log('30$')
} else if (weigth > 5) {
	console.log('50$')
}