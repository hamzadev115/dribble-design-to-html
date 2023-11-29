  let cr=document.querySelector("#cursor");
  let crin=document.querySelector("#cursorin");
  let a=document.querySelectorAll("a");

  window.addEventListener("mousemove", function (details) {
    let x = details.clientX;
    let y = details.clientY;
    this.setTimeout(function () { 
        cr.style.top = y - cr.offsetHeight / 2 + "px";
        cr.style.left = x - cr.offsetWidth / 2 + "px";
        crin.style.top = y - crin.offsetHeight / 2 + "px";
        crin.style.left = x - crin.offsetWidth / 2 + "px";
     },100)
    });

    a.forEach(function(hover){
        hover.addEventListener("mouseenter",function(){
            crin.style.scale=2;
            crin.style.border="1px solid #fff";

        })
         hover.addEventListener("mouseleave",function(){
            crin.style.scale=1;
        })
    });

