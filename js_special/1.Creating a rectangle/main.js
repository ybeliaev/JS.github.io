window.onload = function(){
	//создание прямоугольника

	var div = document.createElement('div');
	div.innerHTML = "<strong>Ура!</strong><br> Создан прямоугольник.";
	document.body.appendChild(div);

	div.style.backgroundColor = 'red';
	div.style.width = '150px';
	div.style.height = '150px';
	div.style.padding = '25px';	
	div.style.margin = '25px auto'
	div.style.textAlign = 'center';







}//end 