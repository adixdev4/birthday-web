/* =========================
   MUSIC
========================= */

const music =
document.getElementById("music");


function toggleMusic(){

if(!music) return;

if(music.paused){

music.play();

}else{

music.pause();

}

}


/* =========================
   TYPING
========================= */

const typing =
document.getElementById("typing");


if(typing){

const text =
"Today is not just another day... it is a day to celebrate someone truly special.";

let i=0;

typing.innerHTML="";

function type(){

if(i<text.length){

typing.innerHTML += text.charAt(i);

i++;

setTimeout(type,45);

}

}

type();

}


/* =========================
   PARTICLES
========================= */

function createParticles(){

const container =
document.querySelector(".stars");

if(!container) return;

for(let i=0;i<100;i++){

const star =
document.createElement("span");

star.style.position="fixed";

star.style.width =
Math.random()*3+"px";

star.style.height =
star.style.width;

star.style.background="white";

star.style.borderRadius="50%";

star.style.left =
Math.random()*100+"vw";

star.style.top =
Math.random()*100+"vh";

star.style.opacity =
Math.random();

container.appendChild(star);

}

}

createParticles();


/* =========================
   GIFT
========================= */

function openGift(){

const section =
document.getElementById("giftSection");

if(section){

section.style.display="flex";

}

}


function unwrap(){

const gift =
document.querySelector(".gift");

const text =
document.querySelector("#giftSection p");

if(gift){

gift.style.transform=
"scale(0) rotate(720deg)";

gift.style.opacity="0";

}


if(text){

text.innerHTML=
"✨ Surprise unlocked ✨";

}


confetti();


setTimeout(()=>{

const next =
document.getElementById("continue");

if(next){

next.style.display="block";

}

},1200);

}


/* =========================
   CONFETTI
========================= */

function confetti(){

for(let i=0;i<150;i++){

const el =
document.createElement("div");

el.style.position="fixed";

el.style.left="50%";

el.style.top="50%";

el.style.width="7px";

el.style.height="12px";

el.style.background=
`hsl(${Math.random()*360},100%,70%)`;

el.style.zIndex="9999";

document.body.appendChild(el);


const angle =
Math.random()*Math.PI*2;

const distance =
200+Math.random()*600;


el.animate(

[

{
transform:"translate(-50%,-50%)"
},

{
transform:
`translate(
${Math.cos(angle)*distance}px,
${Math.sin(angle)*distance}px
)
rotate(720deg)`

}

],

{

duration:
1000+Math.random()*1500,

easing:"cubic-bezier(.2,.8,.3,1)"

}

);


setTimeout(()=>el.remove(),3000);

}

}


/* =========================
   LETTER
========================= */

function openLetter(){

const envelope =
document.querySelector(".envelope");

if(envelope){

envelope.classList.toggle("open");

}

}


/* =========================
   COUNTDOWN
========================= */

/*
   CHANGE THIS DATE
   TO HER NEXT BIRTHDAY
*/

const birthday =
new Date("August 25, 2026 00:00:00").getTime();


function countdown(){

const now =
new Date().getTime();

let distance =
birthday-now;


if(distance<0){

distance =
new Date("August 25, 2027 00:00:00")
.getTime()-now;

}


const days =
Math.floor(
distance/(1000*60*60*24)
);


const hours =
Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);


const minutes =
Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);


const seconds =
Math.floor(
(distance%(1000*60))
/
1000
);


const d =
document.getElementById("days");

const h =
document.getElementById("hours");

const m =
document.getElementById("minutes");

const s =
document.getElementById("seconds");


if(d) d.innerHTML =
String(days).padStart(2,"0");

if(h) h.innerHTML =
String(hours).padStart(2,"0");

if(m) m.innerHTML =
String(minutes).padStart(2,"0");

if(s) s.innerHTML =
String(seconds).padStart(2,"0");

}


setInterval(countdown,1000);

countdown();


/* =========================
   FINAL CELEBRATION
========================= */

function celebrate(){

confetti();

fireworks();


const message =
document.getElementById("wishMessage");


if(message){

message.innerHTML =
"✨ May all your wishes come true ✨";

}

}


/* =========================
   FIREWORKS
========================= */

function fireworks(){

for(let n=0;n<8;n++){

setTimeout(()=>{

const x =
Math.random()*window.innerWidth;

const y =
100+
Math.random()*
(window.innerHeight*.6);


for(let i=0;i<40;i++){

const spark =
document.createElement("div");

spark.style.position="fixed";

spark.style.left=x+"px";

spark.style.top=y+"px";

spark.style.width="4px";

spark.style.height="4px";

spark.style.borderRadius="50%";

spark.style.background=
`hsl(${Math.random()*360},100%,70%)`;

spark.style.zIndex="9999";


const angle =
Math.random()*Math.PI*2;

const distance =
80+Math.random()*180;


spark.animate(

[

{
transform:"translate(0,0)",
opacity:1
},

{
transform:
`translate(
${Math.cos(angle)*distance}px,
${Math.sin(angle)*distance}px
)`,

opacity:0

}

],

{

duration:
800+Math.random()*700,

easing:"ease-out"

}

);


document.body.appendChild(spark);


setTimeout(
()=>spark.remove(),
2000
);

}

},n*400);

}

}

/* =========================
   PLACE CHOICE
========================= */

const places = [
    "☕ Cafe",
    "🎬 Movie",
    "🏍️ Ride With Me"
];


function choosePlace(place) {

    const result =
        document.getElementById("wishResult");

    if (!result) return;

    result.innerHTML =
        `Okay... it's a date with destiny 😌❤️<br>
         <span style="font-size:22px">
         You chose ${place}
         </span>`;

    result.classList.add("show");

    confetti();

}


/* =========================
   NO BUTTON TWIST 😈
========================= */

function noOption() {

    const noButton =
        document.getElementById("noButton");

    const result =
        document.getElementById("wishResult");


    /* Choose one of the 3 real options */

    const randomPlace =
        places[
            Math.floor(
                Math.random() * places.length
            )
        ];


    /* Change the button itself */

    noButton.innerHTML = `
        😏
        <strong>Nice Try!</strong>
        <small>Choose again...</small>
    `;


    /* Move the button */

    const x =
        (Math.random() - .5) * 120;

    const y =
        (Math.random() - .5) * 80;


    noButton.style.transform =
        `translate(${x}px, ${y}px)`;


    /* Show message */

    result.innerHTML =
        `Nope... that option isn't available 😌<br>
        <span style="font-size:22px">
        How about ${randomPlace} instead? ❤️
        </span>`;


    result.classList.add("show");


    /* After a moment, automatically select a place */

    setTimeout(() => {

        result.innerHTML =
            `I think ${randomPlace} sounds better anyway 😌❤️`;

        confetti();

    }, 1200);

}

/* =========================
   NO BUTTON RUNS AWAY 😈
========================= */

const noButton =
    document.getElementById("noButton");


if (noButton) {

    noButton.addEventListener(
        "mouseenter",
        function () {

            const options =
                document.querySelectorAll(
                    ".wish-options button:not(#noButton)"
                );


            /* Random option choose */

            const target =
                options[
                    Math.floor(
                        Math.random() *
                        options.length
                    )
                ];


            /* Make No button fixed */

            noButton.style.position =
                "fixed";


            /* Random new position */

            const maxX =
                window.innerWidth -
                noButton.offsetWidth -
                20;


            const maxY =
                window.innerHeight -
                noButton.offsetHeight -
                20;


            const newX =
                Math.max(
                    10,
                    Math.random() * maxX
                );


            const newY =
                Math.max(
                    10,
                    Math.random() * maxY
                );


            noButton.style.left =
                newX + "px";


            noButton.style.top =
                newY + "px";


            /* Highlight random option */

            target.classList.add(
                "cursor-target"
            );


            setTimeout(function () {

                target.classList.remove(
                    "cursor-target"
                );

            }, 700);

        }
    );

}