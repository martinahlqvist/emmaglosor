$(document).ready(function () {

    const glosor = {
        "glosa": [{
            "sv": "value1",
            "fr": "value2"
        }, {
            "sv": "value3",
            "fr": "value4"
        }]
    }


    let nuvarandeGlosa=0;


    function laddaGlosa(nummer){
        $("#glosa").text(glosor.glosa[nummer].sv);
    }

    function kontrolleraSvar (svar, facit) {

        console.log("Du har svarat '" + svar + "' rätt svar var '" + facit + "'.");

// Kontroller om svar är lika med facit om det är rätt så stega upp (addera 1 till nuvarande glosa och anroppa ladda glosa)


    }

    console.log("ready!");

    laddaGlosa(nuvarandeGlosa);



    $("#knapp").click(function () {

        let svar = $("#svarInput").val();

        kontrolleraSvar(svar, glosor.glosa[nuvarandeGlosa].fr);

        $('#glosa').text(svar);
    });

});