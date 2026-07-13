// Loading Screen

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loading").style.opacity="0";

setTimeout(()=>{

document.getElementById("loading").style.display="none";

document.getElementById("welcome").classList.remove("hide");

},900);

},3000);

});

// ======================
// OPEN GIFT
// ======================

const startBtn = document.getElementById("startBtn");

startBtn.onclick = () => {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("envelope").classList.remove("hide");

};

// ======================
// OPEN ENVELOPE
// ======================

const envelope = document.querySelector(".envelope-box");

envelope.onclick = () => {

    document.querySelector(".envelope-top").style.transform =
        "rotateX(180deg)";

    document.querySelector(".letter-preview").style.top = "-20px";

    setTimeout(() => {

        document.getElementById("envelope").style.display = "none";

        document.getElementById("letter").classList.remove("hide");

    }, 900);

};