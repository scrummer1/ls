/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');

function getRandomColor()
{
    const MAX_COLOR = 16777215;

    const intColor = Math.floor(Math.random() * (MAX_COLOR));

    const red = intColor >> 16;
    const green = intColor - (red << 16) >> 8;
    const blue = intColor - (red << 16) - (green << 8);

    return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
}

function getRandomSize() {
    const MAX_SIZE = 200;
    const MIN_SIZE = 20;
    return MIN_SIZE + Math.floor(Math.random() * (MAX_SIZE - MIN_SIZE));
}
function getRandomPosition() {
    const MAX_POSITION = 500;
    const MIN_POSITION = 0;
    return MIN_POSITION + Math.floor(Math.random() * (MAX_POSITION - MIN_POSITION));
}

/*
 Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 Функция НЕ должна добавлять элемент на страницу. На страницу элемент добавляется отдельно

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
 */

function createDiv() {
    let div = document.createElement('div');
    div.setAttribute('class', 'draggable-div');
    div.style.position = 'relative';
    div.style.background = getRandomColor();
    div.style.top = getRandomPosition() + 'px';
    div.style.left = getRandomPosition() + 'px';
    div.style.width = getRandomSize() + 'px';
    div.style.height = getRandomSize() + 'px';
    div.setAttribute('draggable', 'true');
    return div;
}

/*
 Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
   addListeners(newDiv);
 */
function addListeners(target) {
    let xStart, yStart;
    target.addEventListener('dragstart', function (ev) {
        xStart = ev.clientX;
        yStart = ev.clientY;
    }, false);
    target.addEventListener('dragend', function (ev) {
        target.style.left = (parseInt(target.style.left) + ev.clientX - xStart) + 'px';
        target.style.top = (parseInt(target.style.top) + ev.clientY - yStart) + 'px';
    }, false);
}
let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    const div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации D&D
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
