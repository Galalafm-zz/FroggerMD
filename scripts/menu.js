$(document).ready(function(){

    var li4 = document.getElementById("li4");
    var li5 = document.getElementById("li5");
    var li6 = document.getElementById("li6");

    li4.addEventListener('mouseover', function(e){
        li4.style.backgroundColor = "#062330";
        li4.style.borderTop = "3px solid #53C29C";
        li4.style.transitionDuration = "0.15s";
    });

    li4.addEventListener('mouseout', function(e){
        li4.style.backgroundColor = "";
        li4.style.borderTop = "";
    });

    li5.addEventListener('mouseover', function(e){
        li5.style.backgroundColor = "#062330";
        li5.style.borderTop = "3px solid #53C29C";
        li5.style.transitionDuration = "0.15s";
    });

    li5.addEventListener('mouseout', function(e){
        li5.style.backgroundColor = "";
        li5.style.borderTop = "";
    });

    li6.addEventListener('mouseover', function(e){
        li6.style.backgroundColor = "#062330";
        li6.style.borderTop = "3px solid #53C29C";
        li6.style.transitionDuration = "0.15s";
    });

    li6.addEventListener('mouseout', function(e){
        li6.style.backgroundColor = "";
        li6.style.borderTop = "";
    });
});