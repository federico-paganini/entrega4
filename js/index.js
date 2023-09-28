document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });


    const ligthdarkswitch = document.getElementById("modeswitch");
    const btndarkmode = document.getElementById("btn-darkmode");
    const btnligthmode = document.getElementById("btn-lightmode");

    ligthdarkswitch.addEventListener("click", (event) => {
        event.stopPropagation();
        if (ligthdarkswitch.checked) {
            btnligthmode.style.display = "none";
            btndarkmode.style.display = "block";
        } else {
            btnligthmode.style.display = "block";
            btndarkmode.style.display = "none";
        }
    })

    if(localStorage.getItem("darktheme") === "true") {
        btnligthmode.style.display = "none";
        btndarkmode.style.display = "block";
    } else {
        btndarkmode.style.dyslpay = "none";
    }


});

