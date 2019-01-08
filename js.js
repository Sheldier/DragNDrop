// Объявление и инициализация переменных
const fill = document.querySelector('.fill');
fill.style.backgroundImage = "url('img/vendor.png')";
const empties = document.querySelectorAll('.empty');
const button = document.querySelector('button');
const spans = document.querySelectorAll('span');
var targ;

// Привязка событий к каждой из ячеек
for(const empty of empties){
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
	empty.addEventListener('dragstart', dragStartConts);
}

// Функция возвращает перетаскиваемый блок и возвращает все блоки в исходное состояние
function dragStartConts(e) {
	targ = e.target;
	empties.forEach((n) => n.style.transform = null);
	return targ;
}

function dragStart() {
	this.parentElement.style.transform = null;
}

function dragEnd (){
	fill.style.backgroundImage == 'url("img/vendor.png")' ? fill.style.backgroundImage = "url('img/abbay.png')" : fill.style.backgroundImage = "url('img/vendor.png')";
}

// Привязка событий к картинки внутри блока
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	this.className += ' hovered';
}

function dragLeave() {
	this.className = 'empty';
}

// Определяется элемент, в который был помещён перетаскиваемый блок
// Если включён режим переноса блоков, а не картинок, то содержимое блоков
// меняется местами. Если нет, то происходит только перенос картинки
function dragDrop(e) {
	this.className = 'empty';
	let targDrop = e.target;
	this.append(fill);
	this.style.transform = 'scale(0.65)';
	if (button.dataset.switch == "on"){
	 	[targ.children[0].innerText, targDrop.children[0].innerText] = [targDrop.children[0].innerText, targ.children[0].innerText];
	}
}

// Происходит при щелчке ЛКМ по кнопке
function pressedBtn() {
	// Изменение вида и содержимого кнопки, возможности перетаскивать картинку и 
	// её отображения
	if (fill.draggable == true){
		fill.draggable = false;
		fill.style.display = 'none';
		button.dataset.switch = "on";
		button.innerText = 'Changed to containers'
		button.style.width = "200px";
		spans.forEach(function(n) {
		n.style.display = "block";
	});
		// Все элементы становятся перетаскиваемыми и возвращаются в исходное положение
	empties.forEach(function(n) {
		n.setAttribute('draggable','true');
		n.style.transform = 'scale(1)';
	});
	}
	// Изменение вида и содержимого кнопки, возможности перетаскивать картинку и 
	// её отображения
	else{
		fill.draggable = true;
		fill.style.display = 'block';
		button.dataset.switch = "off";
		button.innerText = 'Changed to picture'
		button.style.width = "120px";
		spans.forEach(function(n) {
			n.style.display = "none";
	});
		// Отмена возможности перетаскивать блоки
		empties.forEach(function(n) {
			n.setAttribute('draggable','false');
	});
	}
}