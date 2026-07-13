// ===========================
// LOADING SCREEN
// ===========================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        const loading = document.getElementById("loading");

        loading.style.opacity="0";


        setTimeout(()=>{

            loading.style.display="none";

            document
            .getElementById("welcome")
            .classList.remove("hide");


        },1000);


    },3000);

});




// ===========================
// OPEN GIFT
// ===========================

const startBtn = document.getElementById("startBtn");


if(startBtn){

startBtn.onclick = ()=>{


    document
    .getElementById("welcome")
    .style.display="none";


    document
    .getElementById("envelope")
    .classList.remove("hide");


};

}




// ===========================
// OPEN ENVELOPE
// ===========================


const envelope =
document.querySelector(".envelope-box");


if(envelope){


envelope.onclick=()=>{


document
.querySelector(".envelope-top")
.style.transform =
"rotateX(180deg)";



document
.querySelector(".letter-preview")
.style.top="-20px";



setTimeout(()=>{


document
.getElementById("envelope")
.style.display="none";



document
.getElementById("letter")
.classList.remove("hide");



startTyping();



},1000);



};


}





// ===========================
// LETTER TYPING
// ===========================


const message = `

Selamat ulang tahun Sindi ❤️

Semoga di umur yang baru ini
kamu selalu diberikan kebahagiaan,
kesehatan, dan semua impianmu
bisa tercapai.

Terima kasih sudah menjadi
bagian indah dalam hidupku.

Tetap menjadi Sindi yang aku sayangi.

I Love You ❤️

- Fahmi

`;



let index = 0;



function startTyping(){


const typing =
document.getElementById("typing");



function write(){


if(index < message.length){


typing.innerHTML +=
message.charAt(index);


index++;


setTimeout(write,50);



}else{


setTimeout(()=>{

showNextSections();

},3000);



}


}



write();



}





// ===========================
// NEXT SECTION
// ===========================


function showNextSections(){


document
.getElementById("letter")
.style.display="none";



const sections=[

"gallery",

"timeline",

"reasons",

"ending"

];



let delay=0;



sections.forEach(section=>{


setTimeout(()=>{


document
.getElementById(section)
.classList.remove("hide");



document
.getElementById(section)
.scrollIntoView({

behavior:"smooth"

});



},delay);



delay += 4000;



});



}




// ===========================
// MUSIC
// ===========================


const musicBtn =
document.getElementById("musicBtn");


let music =
new Audio("assets/music/music.mp3");


music.loop=true;


let playing=false;



if(musicBtn){


musicBtn.onclick=()=>{


if(!playing){


music.play();

musicBtn.innerHTML="🔊";

playing=true;


}else{


music.pause();

musicBtn.innerHTML="🎵";

playing=false;


}


};


}





// ===========================
// FLOATING HEARTS
// ===========================


function createHeart(){


const heart =
document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.left =
Math.random()*100+"vw";


heart.style.bottom="-20px";


heart.style.fontSize =
Math.random()*25+15+"px";


heart.style.animation =
"float 6s linear";


document
.getElementById("hearts")
.appendChild(heart);



setTimeout(()=>{

heart.remove();

},6000);


}


setInterval(createHeart,500);






// ===========================
// SAKURA
// ===========================


function createSakura(){


const sakura =
document.createElement("div");


sakura.innerHTML="🌸";


sakura.style.position="fixed";


sakura.style.top="-20px";


sakura.style.left =
Math.random()*100+"vw";


sakura.style.fontSize="25px";


sakura.style.animation =
"fall 8s linear";


document
.getElementById("sakura")
.appendChild(sakura);



setTimeout(()=>{

sakura.remove();

},8000);



}


setInterval(createSakura,800);






// ===========================
// STARS
// ===========================


const stars =
document.getElementById("stars");



if(stars){


for(let i=0;i<150;i++){


let star =
document.createElement("div");


star.style.position="absolute";

star.style.width="2px";

star.style.height="2px";

star.style.background="white";


star.style.left =
Math.random()*100+"%";


star.style.top =
Math.random()*100+"%";


stars.appendChild(star);



}


}






// ===========================
// CELEBRATE
// ===========================


const celebrate =
document.getElementById("celebrate");



if(celebrate){


celebrate.onclick=()=>{


for(let i=0;i<40;i++){


let fire =
document.createElement("div");


fire.innerHTML="✨";


fire.style.position="fixed";


fire.style.left =
Math.random()*100+"vw";


fire.style.top =
Math.random()*100+"vh";


fire.style.fontSize="30px";


document.body.appendChild(fire);



setTimeout(()=>{

fire.remove();

},2000);



}


};


}
