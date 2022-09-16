const menu = document.querySelector("#menu");
const menuMobile = document.querySelector(".menu-mobile");
const modal = document.querySelector(".modal");
const imagenes = document.querySelectorAll(".galery");
const img = document.querySelector(".modal--img");
const btnCerrar = document.querySelector(".cerrar")

menu.addEventListener("click", a);

function a(){
    menuMobile.classList.toggle("inactive");
}

for (i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener("click", function(e){
        modal.classList.toggle("activo");
        let src = e.target.src;
        img.setAttribute("src", src);
    })
}

btnCerrar.addEventListener("click", function(){
    modal.classList.toggle("activo");
})




