
//Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
//Иначе говоря, умножает x на себя n раз и возвращает результат.

//Используйте Arrow Function синтаксис.

const multiplyFunc=(x,n)=>{
    let result = x**n;
    return result;
}

console.log(multiplyFunc(2,64));