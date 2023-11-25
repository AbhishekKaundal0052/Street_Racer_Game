const infobtn = document.getElementById('info')
const popup = document.getElementById('popup')
const popup2 = document.getElementById('popup2')
const play = document.getElementById('play')
const start = document.getElementById('start')
const vehicle = document.querySelector('.vehicle')
infobtn.addEventListener('click', function () {
    popup.style.display = "block";
    infobtn.style.display = "none";
    play.style.marginRight = "20vw";
    play.innerText = "NEXT";
})
play.addEventListener('click', function () {
    popup2.style.display = "inline";
    popup.style.display = "none";
    play.style.display = "none";
    infobtn.style.display = "none";
    // start.style.marginLeft = "1vw";
    start.style.display = "block";
})
let n = document.getElementById('name')
let nickname = document.getElementById('nickname')


start.addEventListener('click', function () {
    if(n.value === '' || nickname.value === ''){
        alert('Enter your name racer!!')
    }
    else{
    localStorage.setItem("name", n.value )
    localStorage.setItem("nickname", nickname.value)
    location.href = "game.html";
    }
})
const bgm = new Audio('assets/MoonDeity---WAKE-UP(pagalworld.co.uk).mp3')
bgm.currentTime = 58;
bgm.play()
