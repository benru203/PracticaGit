function validacion() {
  name = document.getElementById("nombre");
  user = document.getElementById("usuario");
  email = document.getElementById("correo");
  phone = document.getElementById("celular").value;
  sex = document.getElementById("sexo");
  var seleccionado = false;
  for (var i = 0; i < sex.length; i++) {
  	if (sex[i].checked) {
  		seleccionado = true;
  		break;
  	}
  }
  sport = document.getElementById("deporte").selectedIndex;
  if(name == null || name.length == 0 || /^\s+$/.test(name)){
  	alert('[Error] Campo obligatorio');
  	return false;
  } else if(user == null || user.length == 0 || /^\s+$/.test(user)){
  	alert('[Error] Campo olbigatorio, no debe de contener numeros');
  	return false;
  } else if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) || email.length == 0){
  	alert('[Error] Campo obligatorio, el correo debe ser gmail');
  	return false;
  } else if(isNaN(phone)){
  	alert('[Error] Solo puede insertar numeros');
  	return false;
  } else if(!seleccionado){
  	alert("[Error] Debe de seleccionar una de las opciones");
  	return false;
  } else if(sport == null || sport == 0){
  	alert("[Error] debe de seleccionar una de las opciones");
  	return false
  }
  
}