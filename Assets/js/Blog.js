console. log("hello")

if(jQuery) {
    console. log("jquery loaded")
}
else {
    console. log("no jquery")
}

$("#burger").click(function(){
    $("#nav").toggleClass("display-none-mobile");
});
