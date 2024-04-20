$(function (){hentAlle()})

function slettData(){                                   //function to clear the input fields
    $('#film').val('');
    $('#antall').val('');
    $('#fornavn').val('');
    $('#etternavn').val('');
    $('#telefonNr').val('');
    $('#epost').val('');
}

function  hentAlle(){
    $.get("/hentAlle", function (data){
        formaterData(data);
    })
}

function formaterData(billetter){
    let ut ='<table class="table table-striped"><tr><th scope="col">Film</th><th scope="col">Antall</th><th scope="col">Fornavn</th>' +
        '<th scope="col">Etternavn</th><th scope="col">Telefonnr</th><th scope="col">Epost</th></tr>';
    for (const kinoBillett of billetter){
        ut+="<tr><td>"+kinoBillett.film+"</td><td>"+kinoBillett.antall+"</td><td>"
            +kinoBillett.fornavn+"</td><td>"+kinoBillett.etternavn+"</td><td>"
            +kinoBillett.telefonNr+"</td><td>"+kinoBillett.epost+"</td></tr>";
    }
    ut+="</table>"
    $('#alle-billetter').html(ut);
}

function slett(){
    $.get("/slettAlle", function(){
        $("#alle-billetter").html('<table class="table table-striped"><tr><th scope="col">Film</th><th scope="col">Antall</th><th scope="col">Fornavn</th>' +
            '<th scope="col">Etternavn</th><th scope="col">Telefonnr</th><th scope="col">Epost</th></tr></table>');
    })
}

function kjop(){
    //getting the values from the input field
    const film = $('#film').val();
    const antall = Number($('#antall').val()); //converting to number so there's only digits
    const fornavn = $('#fornavn').val();
    const etternavn = $('#etternavn').val();
    const telefonNr = $('#telefonNr').val();
    const epost = $('#epost').val();

    let godkjent = true;        //initializing variable that becomes false if the inputs isn't

    if (film.length===0){ //if the input field is empty an error masseage appears next to the input field
        godkjent=false;
        $('#film-feil').html('Film må være lengre enn null karakterer'); //
    } else {$('#film-feil').html('')}      //otherwise the error message is deleted

    if (!(Number.isInteger(antall) && antall>0)){     //if the number isn't an integer an error masseage appears next to the input field
        godkjent=false;
        $('#antall-feil').html('Må skrive heltall med siffere');
    } else {$('#antall-feil').html('')}      //otherwise the error message is deleted

    if (fornavn.length===0){    //if the input field is empty an error masseage appears next to the input field
        godkjent=false;
        $('#fornavn-feil').html('Fornavn må være lengre enn null karakterer');
    } else {$('#fornavn-feil').html('')}     //otherwise the error message is deleted

    if (etternavn.length===0){  //if the input field is empty an error masseage appears next to the input field
        godkjent=false;
        $('#etternavn-feil').html('Etternavn må være lengre enn null karakterer');
    } else {$('#etternavn-feil').html('')}   //otherwise the error message is deleted

    if (!validatePhone(telefonNr)){     //uses the validatePhone function to see if the input is invalid, if it is an error masseage appears next to the input field
        godkjent=false;
        $('#telefon-feil').html('Må skrive telefonNr med + og 10 siffere');
    } else {$('#telefon-feil').html('')}     //otherwise the error message is deleted

    if (!validateEmail(epost)){     //uses the validateEmail function to see if the input is invalid, if it is an error masseage appears next to the input field
        godkjent=false;
        $('#epost-feil').html('Ikke godkjent epost');
    } else {$('#epost-feil').html('')}       //otherwise the error message is deleted

    if (godkjent) {      //if every input is valid the ticket is saved and added to the array, the array is written, and the input fields cleared
        const nyBillett = new kinoBillett(film, antall, fornavn, etternavn, telefonNr, epost);


        $.post("/lagre", nyBillett, function (){
            hentAlle();
        });

        slettData();
    }
}

const validateEmail = (email) => {              //function to validate email with regex
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const validatePhone = (phonenr) => {          //function to validate phonenumber with regex
    return phonenr.match(
        /^[+]\d{10}$/
    );
};


class kinoBillett{          //ticket class with constructor and toString method
    constructor(film, antall, fornavn, etternavn, telefonNr, epost){
        this.film = film;
        this.antall = antall;
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonNr = telefonNr;
        this.epost = epost;
    }
}
$('#billett-kjop').click(function (){kjop()});//if buy ticket button is clicked

$('#billett-slett').click(function (){slett();}); //when the delete button is clicked the array of tickets gets cleared and it's updated on screen
