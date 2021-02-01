const body = document.querySelector("body");
var im = document.createElement("img");


const IMG_NUMBER = 5;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `img/${imgNumber+1}.jpg`;
    if(im.complete)
    {
        image.classList.add("bgImage");
        body.prepend(image);
    }else{
    }
}
function genRandom(){
    const number=Math.floor(Math.random()*IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();