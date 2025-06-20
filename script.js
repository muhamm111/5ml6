// .length
// Длина массива (кол-во элементов)
// .push()
// Добавить в конец
// .pop()
// Удалить из конца
// .shift()
// Удалить из начала
// .unshift()
// Добавить в начало
// .slice()
// Копировать часть массива
// .splice()
// Удалять/добавлять элементы
// .indexOf()
// Найти индекс элемента
// .includes()
// Проверить, есть ли элемент
// .map()
// Преобразовать элементы
// .filter()
// Отфильтровать элементы

// let nameStudent = ['Yunus', 'Temur', 'Soliha', 'Muhammadamin', 'Xamidulla', 'Muhammadamin', 2074, {user: 'dior011', password: 1221}]
// nameStudent.push('Odil')
// nameStudent.push('Behruz')
// nameStudent.push('Erkaboy')
// nameStudent.push('Ismoil')
// nameStudent.pop()
// nameStudent.unshift('Kozim')

// nameStudent.push({student: 'yunus', age: 13 })
// nameStudent.push('Muhammadamin')
// nameStudent.pop()
// console.log(typeof(nameStudent));


let fruits = [ 'Grape', 'Banana', 'Cherry', 'Olma' ,]
console.log(fruits);
let answer = confirm(`Boshlanishida Arrayning uzunligi: ${fruits.length}`)
if (answer){
    alert('Sizning Arreyangizdan malumotlarni olib tashaymiz')
    fruits.pop();
}
alert(`Arrayning yangi uzunligi: ${fruits.length}`);
console.log(fruits);
