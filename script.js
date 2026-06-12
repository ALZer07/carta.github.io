let current = 0;
const screens = document.querySelectorAll(".screen");

function nextScreen() {
    if (current >= screens.length - 1) return;

    screens[current].classList.remove("active");
    current++;
    screens[current].classList.add("active");
}

function sayYes() {
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
