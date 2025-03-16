// script.js
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️"; // Heart symbol

    // Randomize position
    heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s"; // Random duration for falling
    heart.style.animationDelay = Math.random() * 5 + "s"; // Random delay before heart starts falling

    document.querySelector(".falling-hearts").appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Create hearts every 500ms
setInterval(createHeart, 500);
