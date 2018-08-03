/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var ret = [];
    for (let i = 0; i < array.length; i++) {
        ret[i] = fn(array[i], i, array);
    }
    return ret;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    console.log(arguments.length);
    let i = 0;

    let currentAccumulator = 0;
    if (arguments.length >= 3) {
        currentAccumulator = initial;
    }
    else {
        currentAccumulator = array[0];
        i++;
    }
    for (; i < array.length; i++) {
        currentAccumulator = fn(currentAccumulator, array[i], i, array);
    }
    return currentAccumulator;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let props =  Object.getOwnPropertyNames(obj);
    // var props =  Object.keys(obj);
    for (var i = 0; i < props.length; i++) {
        props[i] = props[i].toUpperCase();
    }
    return props;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    let start = from >= 0 ? from :
        from == undefined ? 0 : array.length + from;
    let finish = to >= 0 ? to :
        to == undefined ? array.length : array.length + to;
    if (finish > array.length) {
        finish = array.length;
    }
    if (start < 0) {
        start = 0;
    }
    let ret = [];
    for (let i = start; i < finish; i++) {
        ret.push(array[i]);
    }
    return ret;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy(obj, {
        set(target, prop, value) {
            target[prop] = value * value;
            return true;
        }
    });
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
