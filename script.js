let current = 0;
const screens = document.querySelectorAll(".screen");
let musicStarted = false;

function nextScreen() {

    if (!musicStarted) {

        const music = document.getElementById("bgMusic");

        music.volume = 0;

        music.play().catch(err => {
            console.log(err);
        });

        let vol = 0;

        const fade = setInterval(() => {

            vol += 0.02;

            if (vol >= 0.25) {
                vol = 0.25;
                clearInterval(fade);
            }

            music.volume = vol;

        }, 100);

        musicStarted = true;
    }

    if (current >= screens.length - 1) return;

screens[current].classList.remove("active");

setTimeout(() => {

    current++;

    screens[current].classList.add("active");

}, 1200);
}

function sayYes() {

    const stars =
    document.getElementById("stars");

    if(stars){
        stars.remove();
    }

    const finalMusic =
    document.getElementById("finalMusic");

    finalMusic.volume = 0.7;

    setTimeout(() => {

        finalMusic.play().catch(err => {
            console.log(err);
        });

    }, 1000);

    document.body.innerHTML = `
    <div style="
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center;
        background:#472E5B;
        color:white;
        font-family:Georgia, serif;
    ">
        <h1>❤️</h1>
        <h1>Entonces oficialmente...</h1>
        <h1>Ya eres mi novia ❤️</h1>
    </div>
    `;

    setInterval(createHeart, 250);
}

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-50px";
    heart.style.fontSize = "25px";
    heart.style.zIndex = "9999";
    heart.style.transition = "transform 4s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(110vh)";
    }, 10);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function createStar(){

    const starsContainer =
    document.getElementById("stars");

    if(!starsContainer) return;

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.style.left =
    Math.random() * 100 + "vw";

    const size =
    Math.floor(Math.random() * 3) + 2;

    star.style.width =
    size + "px";

    star.style.height =
    size + "px";

    const duration =
    Math.random() * 8 + 10;

    star.style.animationDuration =
    duration + "s";

    starsContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

setInterval(createStar, 250);
