$(document).ready(function () {
    /* $('#btn1'.click(function () {
         //console.log("click en el btn1");
         $('#alerta1').show();
     });*/

    $('#btnCloseAlert').click(function () {
        $('#alerta2').hide();
    });

    $('#btn2').click(function () {
        console.log("click en el btn2");
    });

    // $('#btn3').click()
    //$('#modal1').modal();

    $("#btnAjax").click(PresionButon);
        /* function PresionButon()
     {
         var solicitudAjax;
         solicitudAjax = new XMLHttpRequest();
         solicitudAjax.onreadystatechange = function () {
             if (solicitudAjax.readyState == 4)
             { document.getElementById("MyDiv").innerHTML = solicitudAjax.responseText; }
         };
         solicitudAjax.open("GET","cmponentes.php", true);
         solicitudAjax.send();
     }*/
        function PresionButon() {

        var solicitudAjax = new XMLHttpRequest();          //Crear objeto XMLHttpRequest

        solicitudAjax.onreadystatechange = function () {   // En esta propiedad declaramos la funcion a ejecutar
            // cuando cambie el status del objeto XMLHttpRequest

            if (solicitudAjax.readyState == 4 && solicitudAjax.status == 200) {                 // La respueta esta lista
                document.getElementById("divGema").innerHTML = solicitudAjax.responseText;  // La propiedad responseText tiene la respuesta en texto
            }
        };

        solicitudAjax.open("GET", "NuevoTitulo.txt", true);
        solicitudAjax.send();

    }
        $('#btnJson').click(function () {
            $.post('botonJason.php', {}, function (data) {

            console.log(data);
            $('#VINumber').val(data.VINumber);
            $('#Marca').val(data.Marca);
            $('#Modelo').val(data.Modelo);
            $('#Motor').val(data.Motor);
            $('#Fabricante').val(data.Fabricante);
            $('#Pais').val(data.Pais);
            $('#Color').val(data.Color);
            $('#Placaas').val(data.Placas);

        }, 'json');
                 });

        document.getElementById("btnJsonFetch").addEventListener("click", function () {
            let promesa = fetch( 'ComponentesFetch.php');
            promesa.then((respuesta) => respuesta.json())
                   .then(datos => console.log(datos));
        });
        //let cuadradoFunFleRetImpl = a => a*a;
        //console.log(cuadradoFunFleRetImpl(2));

    });