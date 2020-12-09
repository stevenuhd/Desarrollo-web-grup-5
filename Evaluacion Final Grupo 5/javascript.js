//-----------------------------------funcion asociada a crearpago.html------------------------------------------------
function agpago() {
    var min = 2010,
      max = 2050,
      select = document.getElementById('anio');
  
    for (var i = min; i <= max; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }       
}

//------------------------------------funcion asociada a crearpago.html ------------------------------------------
function validar(){

    var errores = "";
    var rut = document.getElementById('rut').value;
    var pago = document.getElementById('pago').value;
    var año= document.getElementById('anio').value;
    var mes= document.getElementById('mes').value;
    var i, s, f, bueno;
    //validamos el rut
    f = "32765432";
    r = document.getElementById("rut").value;
    largo=r.length - 2;
    bueno=false;
    s=0;
    for (i=0;i<largo;i++){
        s=s+(parseInt(r.charAt(i)) * parseInt(f.charAt(i)));
    }
    dv=11-(s%11);
    if (dv==10 && (r.charAt(9)=='K' || r.charAt(9)=='k')){
       
        bueno=true;
    }else{
        if (dv==11 && r.charAt(9)=='0'){
            bueno=true;
        }else{
            if (dv==parseInt(r.charAt(9))){
                bueno=true;
                document.getElementById("rut").style.backgroundColor = "white";
                document.getElementById("rut").style.border="inset";
            }else{
                errores +="Ingrese un RUT valido..."+ '\n';
                document.getElementById("rut").focus();
                bueno=false;
                document.getElementById("rut").style.backgroundColor = "red";
                document.getElementById("rut").style.border = " solid black";
            }
        }
    }
 
    if (pago == null || pago.length == 0 ){
        errores += "Debe ingresar un monto de pago"+ '\n';
        document.getElementById("pago").style.backgroundColor = "red"; 
        document.getElementById("pago").style.border = " solid black";
    }
    else{document.getElementById("pago").style.backgroundColor = "white";
    document.getElementById("pago").style.border= "inset";}
    if (isNaN(pago)){
        errores += "El monto de pago debe ser un número"+ '\n';
        document.getElementById("pago").style.backgroundColor = "red";
        document.getElementById("pago").style.border = " solid black";
    }
        else{var pagonum = parseInt(pago);
            if (pagonum <= 0 || pagonum > 100000000){
                errores += "El monto de pago debe ser un número entero, mayor o igual a cero, y menor o igual a $99.999.999"+ '\n';  
                document.getElementById("pago").style.backgroundColor = "red";  
                document.getElementById("pago").style.border = " solid black";        
            }
        }
    if(mes ==0){
        errores += 'Seleccione un mes'+'\n';    
    }
    if(año==""){
        errores += 'Seleccione un año'+'\n'; 
    }
    if (errores == null || errores == "" || errores.length == 0){
       alert(errores = "Datos ingresados correctamente ");  
    }
     else{
        alert(errores)
     }   
}
// -------------------------------funcion asociada a listadoasedoria.html----------------------------------------------------
function listadoasesoria(obtener){

    let id = parseInt(obtener.id)
    
    var lista = ["asesoria 001: Mejorar escalera de seguridad ", "asesoria 002: Arreglar techo y piso",
     "asesoria 003: Despejar vias de escape", "asesoria 004: Instalar pasamanos en todas las escaleras"]
    
     switch (id) {
         case 0:
             document.getElementById("demo").innerHTML += "<li>" + lista[id] + "</li>";
             
             break;
    
            case 1:
            document.getElementById("demo").innerHTML += "<li>" + lista[id] + "</li>";
            break;
             case 2:
             document.getElementById("demo").innerHTML += "<li>" + lista[id] + "</li>";
            break;
            case 3:
            document.getElementById("demo").innerHTML += "<li>" + lista[id] + "</li>";
            break; 
    
         default:
             break;
     }
    
    }
    
        
//------------------funcion asociada a listadovisita.html------------------------------------------------------------------------
    function myFunction() {
    
        var r = confirm("Desea validar y modificar los chequeos de esta visita?");
        if (r == true) {
        window.location.href='responderchecklist.html';
        } else {
            window.location.href='listadovisitas.html';
        }
        // document.getElementById("demo").innerHTML = txt;
    
    }
//----------------------------------------------------------------------------------------------------------------------   