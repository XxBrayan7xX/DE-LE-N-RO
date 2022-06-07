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



    //Aqui empieza
    $('#btnEliminar').click(function () {
        let ID = document.getElementById('ID').value;
        $.post('Eliminar.php', { ID: ID }, function (data) {
            refrescar(data);
        }, 'json');


        //console.log(Test);
        //if (Test === "") {
        //    //swal("Por favor consulte el objeto a eliminar");
        //}
        //else {
        //    let idX = document.getElementById('ID').value;
        //    console.log("El elemento a ELIMINAR es ".idX);
        //    $.post('Eliminar.php',
        //        {
        //            id: idX
        //        }, function (data) {
        //            refrescar(data);
        //        }, 'json');
            //swal("Objeto eliminado correctamente");
        //}
        //limpiar();
    });



    $('#btnInsertar').click(function () {
        //let Insert = document.getElementById('ID').value;
        //console.log("El elemento a INSERTAR es ".Insert);
        let VINumber = document.getElementById('VINumber').value;
        let Marca = document.getElementById('Marca').value;
        let Modelo = document.getElementById('Modelo').value;
        let Motor = document.getElementById('Motor').value;
        let Fabricante = document.getElementById('Fabricante').value;
        let Pais = document.getElementById('Pais').value;
        let Color = document.getElementById('Color').value;
        let Placaas = document.getElementById('Placaas').value;
        //if (VINumber === "" || Marca === "" || Modelo === "" || Motor === "" || Fabricante === "" || Placaas === "" || Color ==="" || Pais === "") {
        //swal.fire("Por favor  llene todos los datos ");
        //}
        //else {
        $.post('Insertar.php',
            {
                VINUMBER: VINumber,
                MARCA: Marca,
                MODELO: Modelo,
                MOTOR: Motor,
                FABRICANTE: Fabricante,
                PAIS: Pais,
                COLOR: Color,
                PLACAAS: Placaas
            }, function (data) {
                refrescar(data);
            }, 'json');
        // }
    });



    $('#btnModificar').click(function () {
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
                    VINUMBER: VINumber,
                    MARCA: Marca,
                    MODELO: Modelo,
                    MOTOR: Motor,
                    FABRICANTE: Fabricante,
                    PAIS: Pais,
                    COLOR: Color,
                    PLACAAS: Placaas
                }, function (data) {
                    refrescar(data);  
                }, 'json');
        //}

    });
});