let current = 0;

const screens =
document.querySelectorAll(".screen");

function nextScreen(){

    screens[current].classList.remove("active");

    current++;

    if(current < screens.length){
        screens[current].classList.add("active");
    }
}

function sayYes(){

    document.body.innerHTML = `
        <div style="
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        text-align:center;
        color:white;
        background:#0f0f14;
        ">
            <h1>❤️</h1>
            <h1>Entonces oficialmente...</h1>
            <h1>Ya eres mi novia ❤️</h1>
        </div>
    `;

    setInterval(createHeart,250);
}

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML="❤️";

    heart.style.left =
    Math.random()*100+"vw";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },4000);
}