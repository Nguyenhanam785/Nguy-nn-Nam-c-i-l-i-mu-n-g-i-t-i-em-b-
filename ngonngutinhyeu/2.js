const text = "Chào bé yêu, anh là Nguyễn Nam, người yêu của em đây! Anh có một số điều muốn nói với em.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("welcome-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    } else {
        document.getElementById("next-button").classList.remove("hidden");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
    createHearts();
});

function nextPage() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}

function openLetter() {
    const messages = [
        "Chúc mừng sinh nhật em yêu!", 
        "Chúc em luôn vui vẻ và hạnh phúc!", 
        "Anh luôn ở bên em, yêu em mãi mãi!", 
        "Chúc mừng sinh nhật người mà anh yêu thương nhất! Anh chỉ muốn nói rằng, em là điều đẹp đẽ nhất từng đến trong cuộc đời anh.",
        "Chúc em luôn vui vẻ, hạnh phúc và có thật nhiều sức khỏe. Chỉ cần em, với anh như thế đã là đủ.!", 
        "Hãy luôn cười thật nhiều nhé, bé yêu!",
        "Anh yêu em hơn tất cả!",
        "Chúc em một ngày sinh nhật đầy ắp yêu thương!",
        "chúc em tưởi mới bớt muộn phiền khong mituot phải luôn cười thật tươi và luôn san sẻ cho anh mọi rắc rồi hay gánh lặng mà em gặp phải",
        "và Cảm ơn em đã đến bên anh, yêu em nhiều!",
    ];
    let index = 0;
    let textContainer = document.getElementById("letter-text");
    textContainer.innerHTML = "";
    
    function showMessages() {
        if (index < messages.length) {
            textContainer.innerHTML += `<p>${messages[index]}</p>`;
            index++;
            setTimeout(showMessages, 1000);
        } else {
            textContainer.innerHTML += `<p><strong>Cảm ơn em vì đã dành thời gian đọc lá thư này! Yêu em ❤️</strong></p>`;
        }
    }
    showMessages();
}

function createHearts() {
    const container = document.querySelector(".hearts-container");
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}
