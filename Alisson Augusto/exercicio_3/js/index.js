var buttonStart = document.getElementById('start');
var content = document.getElementById('images-content');
var i = 0;
var j = 0;
var w = 0;
var srcs = [];
var clicking = 0;
var clicks = 0;
var img1;
var img2;
buttonStart.onclick = function(){
	start();
}

function start(){
	while(content.hasChildNodes()){
		content.removeChild(content.firstChild);
	}
	while(i < 18){
		var elemDiv = document.createElement('div');
		elemDiv.className = "div-adj";
		var imgDiv = document.createElement('img');
		imgDiv.className = "img-responsive";
		imgDiv.src = "images/game.png";
		imgDiv.onclick = play;
		elemDiv.appendChild(imgDiv);
		content.appendChild(elemDiv);
		i++;
	}
	i = 0;
	w = 0;
	clicks = 0;
	setImages();
}

function play(){
	for(var i = 0; i < 18; i++){
		if(content.children[i].children[0] == this && clicking < 2){
			if(clicking == 0){
				this.src = srcs[i];
				clicking++;
				img1 = this;
			}else if(clicking == 1 && this != img1){
				this.src = srcs[i];
				clicking++;
				img2 = this;
				setTimeout(check, 500);
			}
		}
	}
}

function check(){
	clicks++;
	if(img1.src == img2.src){
		w++;
		if(w >= 9){
			alert('Parabéns! Você conseguiu! Você precisou de '+ clicks +' tentativas para alcançar o sucesso!');
			start();
		}
	}else{
		alert('Você errou, tente novamente!');
		img1.src = "images/game.png";
		img2.src = "images/game.png";
	}
	clicking = 0;
	img1 = null;
	img2 = null;
	
}

function setImages(){
	ranNums = positions();
	j = 0;
	while(j < 18){
		switch(ranNums[j]) {
		case 1:
			srcs[j] = "images/one.png";
        break;
		case 2:
			srcs[j] = "images/two.png";
        break;
		case 3:
			srcs[j] = "images/three.png";
        break;
		case 4:
			srcs[j] = "images/four.png";
        break;
		case 5:
			srcs[j] = "images/five.png";
        break;
		case 6:
			srcs[j] = "images/six.png";
        break;
		case 7:
			srcs[j] = "images/seven.png";
        break;
		case 8:
			srcs[j] = "images/eight.png";
        break;
		case 9:
			srcs[j] = "images/nine.png";
        break;
	}
	j++;
	}
}

function positions() {
	var nums = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
	var	ranNums = [];
	var	a = nums.length;
	var	b = 0;

	while (a--) {
		b = Math.floor(Math.random() * (a + 1));
		ranNums.push(nums[b]);
		nums.splice(b,1);
	}
	return ranNums;
}