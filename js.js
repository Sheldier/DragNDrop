const fill = document.querySelector('.fill');
fill.style.backgroundImage = "url('../../unknown.png')";
const empties = document.querySelectorAll('.empty');

for(const empty of empties){
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

function dragEnd (){
	console.log(fill.style.backgroundImage);
	fill.style.backgroundImage == 'url("../../unknown.png")' ? fill.style.backgroundImage = "url('../../bandicam 2019-01-04 13-00-30-588.jpg')" : fill.style.backgroundImage = "url('../../unknown.png')";
}

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
}