// 1.  Знайдіть суму всіх цифр від 1 до 100.

let sum=0;
for (let i=0; i<=100; i++) {
sum = sum + i;
}
console.log(sum);

// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.
let mas = [1,2,3,4,5]
for (let i = 0; i<=4; i++) {
	console.log (mas[i]);
}
// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення
let mas = [-1,22,3,44,5];
let zm = 0;
for (let i=0; i<= mas.length; i++) {
if (zm < mas[i]) {zm = mas[i];} 
}
console.log(zm);

// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран.
 // Також достатньо тільки 1 змінної для отримання даних від юзера. 

let inpt = prompt('Input enter 8 values through a comma');
 const cifra = inpt.split(',');
 let zero = 0; 
 let plus = 0; 
 let minus = 0;
 let cifra1 = [];
  // Даний рядок коду дає помилку я нерозумію чому, переводжу стрінг масив  в числовий
 //  for (let i=0; i <= 7; i++) {
 // 	cifra1[i] = number(cifra[i]);
 // 	console.log(cifra1[i]);
 // }
 for (let i=0; i <= 7; i++) {
 	if (cifra[i] < 0) { minus++} else {
 		                             if (cifra[i] > 0) { plus++ } else {zero++}
 	}
 }

 console.log("positive numbers " + plus + " negativ numbers " + minus + " zero " + zero);
// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

let rez = 0;
for (let i = 1; i <= 9; i++) {
	rez = 8 * i;
	console.log(" 8 * " + i + " = " + rez);
}
// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.
let mas = [2,5,9,15,0,4];
for (let i = 0; i <= mas.length; ++i) {
	if (( mas[i] > 3) && ( mas[i] < 10)) { console.log(mas[i]);}
}
// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?

for (let i = 0; i<=1; i++)
{
	let vvid = prompt('Input enter 2 values through a comma and sign');
	const cifru = vvid.split(',');
	let zmina1 = Number(cifru[0]);
	let zmina2 = Number(cifru[1]);
       if ((zmina1 !== null) || (zmina2 !== null) || (zmina1 !== undefined) || (zmina2 !== undefined)) 
        {
					let rez = 0;
					let zvirka = '';
				 switch(cifru[2]) {
				 				case "+":
				 				rez = zmina1 + zmina2;
				 				break;
								case "-":
				 				rez = zmina1 - zmina2;
				 				break;
				 				case "*":
				 				rez = zmina1 * zmina2;
				 				break;
				 				case "/":
				 				rez = zmina1 / zmina2;
				 				break;
				 				default: console.log("Incorect data + - * / ");
				 				}

				 	console.log("Your rezult is " + rez);
				 	   zvirka = prompt(" Do you have continue press "y" or press other key if no");
				 	if (zvirka === 'y') {i = 0; rez = 0; zmina1 = 0; zmina2 = 0; vvid = '';}
		}
}
