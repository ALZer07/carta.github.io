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
    <div id="finalScreen" style="
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
        <h1>Comienza nuestra historia de novios ❤️</h1>

        <button
            id="waitButton"
            onclick="showPlaylist()"
            style="
                display:none;
                margin-top:30px;
                padding:12px 24px;
                border:none;
                border-radius:999px;
                cursor:pointer;
                font-size:1rem;
            ">
            ¡Espera! ✨
        </button>

    </div>
    `;

    setTimeout(() => {

        const btn =
        document.getElementById("waitButton");

        if(btn){

            btn.style.display = "block";

            btn.animate(
                [
                    {
                        opacity:0,
                        transform:"translateY(20px)"
                    },
                    {
                        opacity:1,
                        transform:"translateY(0px)"
                    }
                ],
                {
                    duration:800,
                    fill:"forwards"
                }
            );
        }

    }, 5000);

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

function showPlaylist(){

    document.body.innerHTML = `

    <div style="
        min-height:100vh;
        padding:40px;
        box-sizing:border-box;

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;

        background:#472E5B;
        color:white;
        text-align:center;
        font-family:Georgia, serif;
    ">

        <h1>❤️</h1>

        <h2>También preparé esto para ti:</h2>

        <div style="
            width:100%;
            max-width:700px;
            margin-top:20px;
        ">

            <iframe
                data-testid="embed-iframe"
                style="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/54Ce0ftlO8Hx2jUpgNgNSC?utm_source=generator"
                width="100%"
                height="352"
                frameborder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>

        </div>

    </div>
    `;
}
