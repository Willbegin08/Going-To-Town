const canvas = document.getElementById("cityCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lights = [];

for (let i = 0; i < 80; i++) {
    lights.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
    });
}

function animateCityLights() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "gold";

    for (let light of lights) {
        ctx.beginPath();
        ctx.arc(light.x, light.y, 2, 0, Math.PI * 2);
        ctx.fill();

        light.x -= 1.5;

        if (light.x < 0) {
            light.x = canvas.width;
            light.y = Math.random() * canvas.height;
        }
    }

    requestAnimationFrame(animateCityLights);
}

animateCityLights();


const car = document.getElementById("car");

let carX = -150;

function animateCar() {
    carX += 4;

    if (carX > window.innerWidth + 150) {
        carX = -150;
    }

    car.style.transform = `translateX(${carX}px)`;

    requestAnimationFrame(animateCar);
}

animateCar();


const skipBtn = document.getElementById("skipButton");

skipBtn.addEventListener("click", function() {
    window.location.href = "intro.html";
});


setTimeout(function() {
    window.location.href = "intro.html";
}, 6500);