				// Подход программирования через константы в JavaScript

// В последнее время в JavaScript возник новый подход к объявлению переменных. Суть подхода в том, что вместо let мы везде используем const, кроме тех случаев, когда мы точно знаем, что значение будет переменным.

// Смотрите пример:

// const a = 1;
// const b = 2;
// const c = a + b;

// console.log(c);
// Этот подход очень популярный и вы можете встретить его в различных сторонних источниках.

// Я, однако, против этого модного подхода. Дело в том, что константы были придуманы для хранения значений типа числа Пи. То есть для таких значений, которые предопределены в вашей программе. Объявление же всех переменных константами противоречит этой идее.

// Кроме того, не очень логично поведение массивов и объектов - мы объявляем их константами, при этом спокойно можем изменять их свойства. Что это за константы, если их можно изменять?

// Часто объявление объектов константами используется для того, чтобы мы не смогли сменить тип данных - вместо объекта записать примитив. Но если нам нужен контроль типов, которого нет по умолчанию в JavaScript, то лучше воспользоваться его диалектом TypeScript.

// В общем, вы можете пользоваться этим подходом, раз такая мода, но я против и дальше в учебнике переменные по-прежнему будут объявляться через let, как это было задумано авторами языка.

//Zadacha 1 Перепишите следующий код через описанный подход:
// let arr = [1, 2, 3, 4, 5];
// let res = arr[1] + arr[2];
// console.log(res); // 5

// const arr = [1, 2, 3, 4, 5];
// const res = arr[1] + arr[2];
// console.log(res); // 5
