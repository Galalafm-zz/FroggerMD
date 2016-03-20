// menu

$(document).ready(function(){

    var li1 = document.getElementById("li1");
    var li2 = document.getElementById("li2");
    var li3 = document.getElementById("li3");
    var li4 = document.getElementById("li4");
    var li5 = document.getElementById("li5");
    var li6 = document.getElementById("li6");

    li1.addEventListener('mouseover', function(e){
        li1.style.backgroundColor = "#0C2835";
        li1.style.borderTop = "3px solid #53C29C";
        li1.style.transitionDuration = "0.15s";
    });
    li1.addEventListener('mouseout', function(e){
        li1.style.backgroundColor = "";
        li1.style.borderTop = "";
    });

    li2.addEventListener('mouseover', function(e){
        li2.style.backgroundColor = "#0C2835";
        li2.style.borderTop = "3px solid #53C29C";
        li2.style.transitionDuration = "0.15s";
    });
    li2.addEventListener('mouseout', function(e){
        li2.style.backgroundColor = "";
        li2.style.borderTop = "";
    });

    li3.addEventListener('mouseover', function(e){
        li3.style.backgroundColor = "#0C2835";
        li3.style.borderTop = "3px solid #53C29C";
        li3.style.transitionDuration = "0.15s";
    });
    li3.addEventListener('mouseout', function(e){
        li3.style.backgroundColor = "";
        li3.style.borderTop = "";
    });

});