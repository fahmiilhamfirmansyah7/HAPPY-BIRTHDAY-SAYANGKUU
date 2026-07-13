// ===========================
// LOADING SCREEN
// ===========================

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    setTimeout(() => {

        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

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

    startBtn.addEventListener("click",()=>{

        document
        .getElementById("welcome")
        .style.display="none";


        document
        .getElementById("envelope")
        .classList.remove("hide");


    });

}





// ===========================
// OPEN ENVELOPE
// ===========================

const envelope =
document.querySelector(".envelope-box");


if(envelope){

    envelope.addEventListener("click",()=>{


        document
        .querySelector(".envelope-top")
        .style.transform="rotateX(180deg)";


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



    });

}





// ===========================
// LETTER TYPING
// ===========================

const message = `

Selamat ulang tahun Sindi ❤️

Semoga kamu selalu diberikan
kebahagiaan, kesehatan,
dan semua impianmu tercapai.

Terima kasih sudah hadir
dan menjadi seseorang yang
berarti dalam hidupku.

Tetap jadi Sindi yang aku sayangi.

I Love You ❤️

- Fahmi

`;

let typingIndex = 0;


function startTyping(){

    const typing =
    document.getElementById("typing");


    if(!typing) return;


    function write(){

        if(typingIndex < message.length){


            typing.innerHTML +=
            message.charAt(typingIndex);


            typingIndex++;

            setTimeout(write,50);


        }else{


            setTimeout(showNextSections,2000);


        }

    }


    write();

}





// ===========================
// SHOW NEXT SECTION
// ===========================

function showNextSections(){


    const sections=[

        "gallery",
        "timeline",
        "reasons",
        "ending"

    ];


    let delay=0;


    document
    .getElementById("letter")
    .style.display="none";



    sections.forEach(section=>{


        setTimeout(()=>{


            const el =
            document.getElementById(section);


            if(el){

                el.classList.remove("hide");


                el.scrollIntoView({

                    behavior:"smooth"

                });

            }


        },delay);



        delay += 3500;



    });


}







// ===========================
// MUSIC
// ===========================

const musicBtn =
document.getElementById("musicBtn");


const music =
new Audio("./assets/music/music.mp3");


music.loop=true;


let musicPlaying=false;


if(musicBtn){


    musicBtn.onclick=()=>{


        if(!musicPlaying){


            music.play()
            .catch(()=>{

                alert("Masukkan file music.mp3 ke assets/music");

            });


            musicBtn.innerHTML="🔊";

            musicPlaying=true;


        }else{


            music.pause();

            musicBtn.innerHTML="🎵";

            musicPlaying=false;


        }


    };


}







// ===========================
// FLOATING HEART
// ===========================

function createHeart(){


    const hearts =
    document.getElementById("hearts");


    if(!hearts) return;


    const heart =
    document.createElement("div");


    heart.innerHTML="❤️";


    heart.style.position="fixed";

    heart.style.left =
    Math.random()*100+"vw";


    heart.style.bottom="-20px";


    heart.style.fontSize =
    (Math.random()*20+15)+"px";


    heart.style.animation=
    "float 6s linear";


    hearts.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },6000);


}


setInterval(createHeart,700);






// ===========================
// SAKURA FALL
// ===========================

function createSakura(){


    const sakuraBox =
    document.getElementById("sakura");


    if(!sakuraBox) return;



    const sakura =
    document.createElement("div");


    sakura.innerHTML="🌸";


    sakura.style.position="fixed";

    sakura.style.top="-30px";


    sakura.style.left =
    Math.random()*100+"vw";


    sakura.style.fontSize="25px";


    sakura.style.animation=
    "fall 8s linear";


    sakuraBox.appendChild(sakura);



    setTimeout(()=>{

        sakura.remove();

    },8000);


}


setInterval(createSakura,1000);







// ===========================
// STARS
// ===========================

const stars =
document.getElementById("stars");


if(stars){


    for(let i=0;i<120;i++){


        const star =
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


    for(let i=0;i<50;i++){


        const fire =
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