//use esse arquivo!
var buttonNext = document.getElementById('next').children[0];
var buttonPrev = document.getElementById('prev').children[0];
var img = document.getElementById('container-img').children[0];
var i = 1;
buttonNext.onclick = function(){
	switch(i) {
    case 1:
		i = 2;
        img.src = "images/two.jpg";
        break;
    case 2:
		i = 3;
        img.src = "images/three.jpg";
        break;
	case 3:
		i = 4;
        img.src = "images/four.jpg";
        break;
	case 4:
		i = 1;
        img.src = "images/one.jpg";
        break;
	}
}
buttonPrev.onclick = function(){
	switch(i) {
    case 1:
		i = 4;
        img.src = "images/four.jpg";
        break;
    case 2:
		i = 1;
        img.src = "images/one.jpg";
        break;
	case 3:
		i = 2;
        img.src = "images/two.jpg";
        break;
	case 4:
		i = 3;
        img.src = "images/three.jpg";
        break;
	}
}