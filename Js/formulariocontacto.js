	function validacion(){
		if (document.formu.mensaje.value.length===0){
  		alert("Tiene que escribir su mensaje");
  		document.formu.mensaje.focus();
  		return false;
		} 
					
		alert("Muchas gracias por enviar el formulario");
		document.formu.submit();
	}
	