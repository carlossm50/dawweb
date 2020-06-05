/*Cunado se carga la pagina se buscar el usuario carlos en el archivo json_logged.json*/
$("document").ready(function () {
    $.getJSON("json_logged.json", function (obj) {
            $.each(obj, function (key, value) {
                if (value.user == "carlos") {
                    $("#fullname").text(value.fullname);
                    return;
                }
            });
        });
        
        /*Funcion para el boton refresh
         Cuando se haace click en este boton se cargan los proyectos contenidos en el archivo json_data.json*/
    $("#refresh").click(function () {
        $.getJSON("json_data.json", function (obj) {
            $("#prjpanel").empty();
            $("#prjpanel").append("<div class='panel-heading'>Name</div>");
            $.each(obj, function (key, value) {                
                $("#prjpanel").append(
                                      "<div class='panel-body'>"+
                                            "<a href='" + value.url + "'>" + value.name + "</a>"+
                                      "</div>");
                              
                
            });
        });
    })
});