//use esse arquivo!
var table = document.getElementsByTagName("table")[0];
var buttonAdd = document.getElementById('singlebutton');
var inputName = document.getElementById('nome');
var inputEmail = document.getElementById('email');
var inputPhone = document.getElementById('telefone');
var isEditing = false;
var row;

buttonAdd.onclick = function() {
	if(isEditing){
		if(check()){
			table.rows[row].cells[0].innerHTML = inputName.value;
			table.rows[row].cells[1].innerHTML = inputEmail.value;
			table.rows[row].cells[2].innerHTML = inputPhone.value;
			isEditing = false;
			clearAll();
		}
	}else{
		if(check()){
			var body = table.tBodies[0];
			var tr = body.insertRow();
	
			var firstTd = tr.insertCell();
			var texto = document.createTextNode(inputName.value);
			firstTd.appendChild(texto);
	
			var secondTd = tr.insertCell();
			var texto2 = document.createTextNode(inputEmail.value);
			secondTd.appendChild(texto2);
	
			var thirdTd = tr.insertCell();
			var texto3 = document.createTextNode(inputPhone.value);
			thirdTd.appendChild(texto3);
	
			var fourthTd = tr.insertCell();
			var img1 = document.createElement('img');
			img1.src = "images/edit.png"
			img1.onclick = edit;
			fourthTd.appendChild(img1);
	
			var fifthTd = tr.insertCell();
			var img2 = document.createElement('img');
			img2.src = "images/close.png"
			img2.onclick = remove;
			fifthTd.appendChild(img2);
		
			clearAll();
		}
	}
}

function clearAll(){
	inputName.value = '';
	inputEmail.value = '';
	inputPhone.value = '';
}

function check(){
	if(inputName.value == ''){
		inputName.focus();
		alert('O nome é obrigatório');
		return false;
	}else if(inputEmail.value == ''){
		inputEmail.focus();
		alert('O email é obrigatório');
		return false;
	}else if(inputPhone.value == ''){
		inputPhone.focus();
		alert('O telefone é obrigatório');
		return false;
	}else{
		return true;
	}
}

function remove(){
	row = this.parentNode.parentNode.rowIndex;
	table.deleteRow(row);
}

function edit(){
	row = this.parentNode.parentNode.rowIndex;
	inputName.value = table.rows[row].cells[0].innerHTML;
	inputEmail.value = table.rows[row].cells[1].innerHTML;
	inputPhone.value = table.rows[row].cells[2].innerHTML;
	isEditing = true;
}