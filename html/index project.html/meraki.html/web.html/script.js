function nextPage() {
    window.location.href = "mirror.html"; // Yeh Page 2 ke liye
}

// 🩷 Bubbles Generate Karne Ke Liye
function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    window.location.href = "foldername/mirror.html";
    
    let size = Math.random() * 30 + 20; // Random size
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.left = Math.random() * window.innerWidth + "px";
    bubble.style.animationDuration = Math.random() * 3 + 3 + "s";
    
    setTimeout(() => {
        bubble.remove();
    }, 6000);
}

setInterval(createBubble, 500);
   