window.addEventListener("load", function(){
    var loaderWrapper = document.querySelector(".wrapper");
    if (loaderWrapper) {
        loaderWrapper.style.transition = "opacity 0.5s ease";
        loaderWrapper.style.opacity = "0";
        setTimeout(function (){
            loaderWrapper.style.display = "none";
        }, 500);
    }
});