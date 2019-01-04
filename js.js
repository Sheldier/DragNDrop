const fill = document.querySelector('.fill');
fill.style.backgroundImage = "url('img/vendor.png')";
const empties = document.querySelectorAll('.empty');
const button = document.querySelector('button');

for(const empty of empties){
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
	empty.addEventListener('dragstart', dragStartConts);
}

function dragStartConts() {
	this.style.transform = null;
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
function pressedBtn() {
	if (fill.draggable == true){
	fill.draggable = false;
	fill.style.display = 'none';
	button.dataset.switch = "on";
	button.innerText = 'Changed to containers'
	button.style.width = "200px";
	empties.forEach(function(n) {
		n.setAttribute('draggable','true');
		n.style.transform = 'scale(1)';
	});
	}
	else{
		fill.draggable = true;
		fill.style.display = 'block';
		button.dataset.switch = "off";
		button.innerText = 'Changed to picture'
		button.style.width = "120px";
		empties.forEach(function(n) {
		n.setAttribute('draggable','false');

	});
	}
}