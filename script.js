function obtenerValores() {
    var basico = parseInt(document.querySelector(".basico").value);
    var inasistencias = parseInt(document.querySelector(".inasistencias").value);
    var antiguedad = parseInt(document.querySelector(".antiguedad").value);
    var horas100 = parseInt(document.querySelector(".horas-al-100").value);
    var horas50 = parseInt(document.querySelector(".horas-al-50").value);
    var detalle = document.querySelector(".detalle").value;
  

    var zona = basico * 0.05;
    var basicoConformado = basico + zona;

    var antiguedad = basico * antiguedad / 100

    var diaInasistencias = basico / 30

    var valorInasistencias = diaInasistencias * inasistencias

    var valorHora = basico / 200
    var horas100 = valorHora * horas100 * 2
    var horas50 = valorHora * horas50 * 1.5

    var presentismo = 0;
    if (inasistencias < 2) {
      presentismo = basico * 8.33 / 100;
    }

    var bruto = basicoConformado + antiguedad + horas100 + horas50 + presentismo

    // Deducciones

    var jubilacion = bruto * 11 / 100
    var pami = bruto * 3 / 100
    var os = bruto * 3 / 100
    var cec = bruto * 2 / 100
    var faecys = bruto * 0.5 / 100

    var neto = bruto - jubilacion - pami - os - cec - faecys
    
    if (detalle === "Resumido") {
    var showBruto = document.getElementById("sueldoBruto");
    showBruto.innerHTML = 'Tu sueldo bruto es de ' + bruto;

    var showNeto = document.getElementById('neto')
    showNeto.innerHTML = 'Tu sueldo neto es de ' + neto; 

  } else if (detalle === "Detallado") {
    var showValoresDetallados = document.getElementById("valoresDetallados");
    showValoresDetallados.innerHTML = 'Los valores detallados son los siguientes:';

    var showBasico = document.getElementById('basico');
    showBasico.innerHTML = 'Tu basico es de: ' + basico;

    var showZona = document.getElementById('zona')
    showZona.innerHTML = 'Tu zona es de: ' + zona;

    var showBasicoConformado = document.getElementById('basicoConformado');
    showBasicoConformado.innerHTML = 'Tu basico conformado es de: ' + basicoConformado;

    var showAntiguedad = document.getElementById('antiguedad');
    showAntiguedad.innerHTML = 'Tu antiguedad es de: ' + antiguedad;

    var showHs100 = document.getElementById('hs100');
    showHs100.innerHTML = 'Tus horas al 100 equivalen a: ' + horas100;

    var showHs50 = document.getElementById('hs50');
    showHs50.innerHTML = 'Tus horas al 50 equivalen a: ' + horas50;

    var showPresentismo = document.getElementById('presentismo');
    showPresentismo.innerHTML = 'Tu presentismo es de: ' + presentismo;

    var showBruto = document.getElementById("sueldoBruto");
    showBruto.innerHTML = 'Tu sueldo bruto es de: ' + bruto;

    var showJubilacion = document.getElementById("jubilacion");
    showJubilacion.innerHTML = 'Tu jubilacion te descuenta: ' + jubilacion;

    var showPami = document.getElementById("pami");
    showPami.innerHTML = 'El PAMI te descuenta: ' + pami;

    var showOs = document.getElementById("os");
    showOs.innerHTML = 'La obra social te descuenta: ' + os;

    var showCec = document.getElementById("cec");
    showCec.innerHTML = 'El CEC te descuenta: ' + cec;

    var showFaecys = document.getElementById("faecys");
    showFaecys.innerHTML = 'Faecys te descuenta: ' + faecys;

    var showNeto = document.getElementById('neto')
    showNeto.innerHTML = 'Tu sueldo neto es de ' + neto; 
  }
}
  