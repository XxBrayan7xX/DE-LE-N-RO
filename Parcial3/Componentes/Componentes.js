$(document).ready(function () {
    $('#btn1'.click(function () {
        //console.log("click en el btn1");
        $('#alerta1').show();
    });

    $('#btnCloseAlert').click(function () {
        $('#alerta2').hide();
    });

    $('#btn2'.click(function () {
        console.log("click en el btn2");
    });

    $('#btn3').click()
    $('#modal1').modal();
});
