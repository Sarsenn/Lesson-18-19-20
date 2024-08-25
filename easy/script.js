'use strict';
//1 задание
//Для проверки раскомментировать;


/* let num = +prompt("Дай мне число!");

if (num%2) {
	alert("Не четное число")
} else {
	alert('Четное число')
}
 */


//2 задание

/* let num1 = +prompt("Дай мне число!");
let num2 = +prompt("Дай мне eще один число!");

let result = num1 > num2 ? alert(`${num1}: Болшее!` ) : alert(`${num2}: Болшее!` ); */

//3 задание 

/* let year = +prompt("Какой сейчас год?");

if(year % 4) {
	alert('Обычный год');
} else {
	alert('Вискосный год')
} */


//4 задание

/* let variable;


if(typeof(variable) == 'string') {
	alert('Переменная является строкой»')
} else if (typeof(variable) == 'number') {
	alert('Переменная является числом')
} else {
	alert('Переменная не является строкой или числом')
} */

// 5 задание

/* let hour;

if(hour >= 6 && hour <= 12) {
	console.log("Доброе утро!")
} else if (hour > 12 && hour <= 18) {
	console.log("Добрый день!")
} else {
	console.log("Доброй ночи!")
} */

// 6 задание 

/* let num3 = 3,
	num4 = 11,
	num5 = 9;

if (num3 > num4 && num3 > num5) {
	console.log(`Самое большое число ${num3}`)
} else if (num4 > num5) {
	console.log(`Самое большое число ${num4}`)
} else {
	console.log(`Самое большое число ${num5}`)
} */

// 7 задание 

/* let login = 'Sarsen';
let password = 777;

for (let i = 0; i < 1; i++) {

	let loginAsk = prompt('Введите login');

	if (loginAsk == login) {
		alert('Правильно!')
	} else {
		alert('Введеные данные некорректный!')
		i--;
	}

	for (let k = 0; k < 1; k++)  {

		let PasswordAsk = prompt('Введите password');

		if (PasswordAsk == password) {
			alert('Правильно!')
		} else {
			alert('Введеные данные некорректный!')
			k--;
		}
	}

	alert('Вы вошли в систему!')

} */


// 8 задание

/* let month;

if (month == 1) {
	console.log('January')
} else if (month == 2){
	console.log('February')
} else if (month == 3){
	console.log('March');
}  else if (month == 4) {
	console.log('April');
} else if (month == 5) {
	console.log('May');
} else if (month == 6) {
	console.log('June');
} else if (month == 7) {
	console.log('July');
}else if (month == 8) {
	console.log('August');
}else if (month == 9) {
	console.log('September');
}else if (month == 10) {
	console.log('September');
}else if (month == 11) {
	console.log('November');
}else if (month == 12) {
	console.log('December');
} else {
	console.log('Не корректная дата');
} */

// 9 задание

/* let age = 33;

if (age <= 12) {
	console.log('Детский возраст')
} else if (age > 12 && age <= 18 ){
	console.log('Подростковый возраст')
} else if (age > 18 && age <= 65) {
	console.log('Взрослый возраст')
} else {
	console.log('Пожилой возраст')
} */

// 10 задание 

let monthNumber = prompt('Какой сейчас месец(цифры)');

if (monthNumber == 1) {
	console.log('January')
} else if (monthNumber == 2){
	console.log('February')
} else if (monthNumber == 3){
	console.log('March');
}  else if (monthNumber == 4) {
	console.log('April');
} else if (monthNumber == 5) {
	console.log('May');
} else if (monthNumber == 6) {
	console.log('June');
} else if (monthNumber == 7) {
	console.log('July');
}else if (monthNumber == 8) {
	console.log('August');
}else if (monthNumber == 9) {
	console.log('September');
}else if (monthNumber == 10) {
	console.log('September');
}else if (monthNumber == 11) {
	console.log('November');
}else if (monthNumber == 12) {
	console.log('December');
} else {
	console.log('Не корректная дата');
}