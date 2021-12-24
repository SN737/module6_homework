// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//На этот раз оформите решение в виде функции.


let arr = [1,2,3,4,5,6,null,0,'a','b'];
let odd = 0;
let even = 0;
let nonDigit = 0;

function arrayAnalyser() {
    arr.forEach(function(item, index, array) {
    if (typeof item == "number"){
        if (item % 2 === 0 ) {
            even += 1;
        } else {
            odd += 1;
        }
    } else {
        nonDigit += 1;
    }
}
    );
    console.log(`Элементов в массиве = ${arr.length}`);
    console.log(`Чётных элементов = ${even}`);
    console.log(`Нечётных элементов = ${odd}`);
    console.log(`Остальных элементов = ${nonDigit}`);
}
arrayAnalyser();