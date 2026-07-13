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
// WELCOME BUTTON
// ===========================

const startBtn = document.getElementById("startBtn");

if(startBtn){

startBtn.onclick = ()=>{

    document.getElementById("welcome").style.display="none";

    document
    .getElementById("countdown")
    .classList.remove("hide");

    startCountdown();

};

}


// ===========================
// COUNTDOWN
// ===========================

function startCountdown(){

    const target =
    new Date("July 14, 2026 00:00:00")
    .getTime();


    const timer=setInterval(()=>{


        const now=new Date().getTime();

        const distance=target-now;


        const element =
        document.getElementById("countdownText");


        if(distance<=0){

            clearInterval(timer);

            element.innerHTML=
            "🎂 Happy Birthday Sindi ❤️";


            setTimeout(()=>{

                document
                .getElementById("countdown")
                .style.display="none";


                document
                .getElementById("envelope")
                .classList.remove("hide");


            },3000);


        }else{


            let days=Math.floor(
                distance/(1000*60*60*24)
            );


            let hours=Math.floor(
                (distance%(1000*60*60*24))/
                (1000*60*60)
            );


            let minutes=Math.floor(
                (distance%(1000*60*60))/
                (1000*60)
            );


            let seconds=Math.floor(
                (distance%(1000*60))/1000
            );


            element.innerHTML=
            `${days} Hari 
            ${hours} Jam 
            ${minutes} Menit 
            ${seconds} Detik`;

        }


    },1000);

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
    .style.transform=
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
// TYPING LETTER
// ===========================


const message=`

Selamat ulang tahun Sindi ❤️

Hari ini adalah hari spesialmu.

Terima kasih sudah hadir dan membuat
hari-hariku menjadi lebih indah.

Semoga semua impianmu tercapai,
selalu diberikan kebahagiaan,
kesehatan, dan kesuksesan.

Tetap menjadi Sindi yang aku kenal.

Aku sayang kamu ❤️

- Fahmi

`;


let typingIndex=0;


function startTyping(){


const typing=
document.getElementById("typing");


function write(){


if(typingIndex < message.length){


typing.innerHTML +=
message.charAt(typingIndex);


typingIndex++;


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


sections.forEach(id=>{


setTimeout(()=>{


document
.getElementById(id)
.classList.remove("hide");


document
.getElementById(id)
.scrollIntoView({
behavior:"smooth"
});


},delay);


delay+=4000;


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


const heart=
document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.left=
Math.random()*100+"vw";


heart.style.bottom="-20px";


heart.style.fontSize=
Math.random()*25+15+"px";


heart.style.animation=
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


const sakura=
document.createElement("div");


sakura.innerHTML="🌸";


sakura.style.position="fixed";


sakura.style.top="-20px";


sakura.style.left=
Math.random()*100+"vw";


sakura.style.fontSize=
"25px";


sakura.style.animation=
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


for(let i=0;i<150;i++){


let star=
document.createElement("div");


star.style.position="absolute";


star.style.width="2px";

star.style.height="2px";


star.style.background="white";


star.style.left=
Math.random()*100+"%";


star.style.top=
Math.random()*100+"%";


stars.appendChild(star);


}



// ===========================
// CELEBRATE BUTTON
// ===========================


const celebrate =
document.getElementById("celebrate");


if(celebrate){


celebrate.onclick=()=>{


for(let i=0;i<30;i++){


let fire=
document.createElement("div");


fire.innerHTML="✨";


fire.style.position="fixed";


fire.style.left=
Math.random()*100+"vw";


fire.style.top=
Math.random()*100+"vh";


fire.style.fontSize="30px";


document.body.appendChild(fire);


setTimeout(()=>{

fire.remove();

},2000);



}


};


}