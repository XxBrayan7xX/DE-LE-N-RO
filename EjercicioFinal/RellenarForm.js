$(document).ready(function() {
    $('#btnConsultaDB').click(function () {
        let parid = prompt("Teclee el ID a consultar");

        $.post('Conexion.php', { par1: parid }, function (data) {
            refrescar(data);
        }, 'json');
    });

    function refrescar(objeto) {
        console.log(objeto);
        $('#ID').val(objeto.ID);
        $('#VINumber').val(objeto.VINumber);
        $('#Marca').val(objeto.Marca);
        $('#Modelo').val(objeto.Modelo);
        $('#Motor').val(objeto.Motor);
        $('#Fabricante').val(objeto.Fabricante);
        $('#Pais').val(objeto.Pais);
        $('#Color').val(objeto.Color);
        $('#Placaas').val(objeto.Placaas);
    }
});