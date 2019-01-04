const fill = document.querySelector('.fill');
fill.style.backgroundImage = "url('img/vendor.png')";
const empties = document.querySelectorAll('.empty');

for(const empty of empties){
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

function dragStart() {
	this.parentElement.style.transform = null;
}

function dragEnd (){
	fill.style.backgroundImage == 'url("img/vendor.png")' ? fill.style.backgroundImage = "url('img/abbay.png')" : fill.style.backgroundImage = "url('img/vendor.png')";
}

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

function dragDrop() {
	this.className = 'empty';
	this.append(fill);
	this.style.transform = 'scale(0.65)';
}