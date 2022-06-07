$(document).ready(function() {

    $('#btnConsultaDB').click(function () {
        swal("Ingresa el ID a consultar: ",
            {
                content: "input",
            })
            .then((ID) => {
                console.log("El id a CONSULTAR es " + ID);
                $.post('Conexion.php', { par1: ID }, function (data) {
                    refrescar(data);
                }, 'json');
            })
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
    function limpiar() {
        document.getElementById('ID').value = "";
        document.getElementById('VINumber').value = "";
        document.getElementById('Marca').value = "";
        document.getElementById('Modelo').value = "";
        document.getElementById('Motor').value = "";
        document.getElementById('Fabricante').value = "";
        document.getElementById('Pais').value = "";
        document.getElementById('Color').value = "";
        document.getElementById('Placaas').value = "";
    }

    $('#btnLimpiar').click(function () {
        console.log("Ya estamos limpiando")
        limpiar();
    });

    $('#btnEliminar').click(function () {
        let ID = document.getElementById('ID').value;
        if (ID === "") { swal("ID vacio!"); }
        else {
            $.post('Eliminar.php', { ID: ID }, function (data) {
                refrescar(data);
            }, 'json');

            swal("Objeto eliminado correctamente");
            limpiar();
        }
    });



    $('#btnInsertar').click(function () {
        let VINumber = document.getElementById('VINumber').value;
        let Marca = document.getElementById('Marca').value;
        let Modelo = document.getElementById('Modelo').value;
        let Motor = document.getElementById('Motor').value;
        let Fabricante = document.getElementById('Fabricante').value;
        let Pais = document.getElementById('Pais').value;
        let Color = document.getElementById('Color').value;
        let Placaas = document.getElementById('Placaas').value;

        $.post('Insertar.php',
            {
                VINUMBER: VINumber,
                MARCA:Marca,
                MODELO:Modelo,
                MOTOR:Motor,
                FABRICANTE:Fabricante,
                PAIS:Pais,
                COLOR:Color,
                PLACAAS:Placaas
            }, function (data) {
                refrescar(data);
        }, 'json');
        swal("Se ha insertado correctamente");
        limpiar();

    });



    $('#btnModificar').click(function () {
            let ID = document.getElementById('ID').value;
            let VINumber = document.getElementById('VINumber').value;
            let Marca = document.getElementById('Marca').value;
            let Modelo = document.getElementById('Modelo').value;
            let Motor= document.getElementById('Motor').value;
            let Fabricante = document.getElementById('Fabricante').value;
            let Pais = document.getElementById('Pais').value;
            let Color = document.getElementById('Color').value;
            let Placaas = document.getElementById('Placaas').value;
            $.post('Modificar.php',

                {
                    ID:ID,
                    VINUMBER:VINumber,
                    MARCA:Marca,
                    MODELO:Modelo,
                    MOTOR:Motor,
                    FABRICANTE:Fabricante,
                    PAIS:Pais,
                    COLOR:Color,
                    PLACAAS:Placaas
                }, function (data) {
                      
                }, 'json');

        swal("Se ha modificado correctamente");
    });
});