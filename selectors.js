//intervalID variable
var intervalID;
//boolean
var hidden = false;
//define function
function setID(){
    intervalID = setInterval(show_hideImg, 2000);
}
function show_hideImg(){
    if(hidden === true){
        $("#gallery li:nth-child(2)").hide();
        hidden = false
    }
    else{
        $("#gallery li:nth-child(2)").show();
        hidden = true
    }
}
