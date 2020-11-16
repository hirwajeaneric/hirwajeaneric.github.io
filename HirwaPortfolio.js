function myFunction () {
    var x = document.getElementById("mynavigation");
    if (x.className == "topnavig"){
        x.className += "responsive";
    }
    else {
        x.className = "topnavig"
    }
}