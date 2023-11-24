const road = document.getElementById('roadtest');
var ride = document.getElementById('ride');
const traffic = document.getElementById('traffic');
var car = 0;
let trafficCars = [];
let score = 0
const maxLives = 4;
var lives = maxLives;

let collisionBool = false

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const vehicles = [
    'assets/car 1.svg',
    'assets/car 2.svg',
    'assets/car 3.svg',
    'assets/car 5.svg',
    'assets/car 6.svg',
    'assets/car 7.svg',
    'assets/car 8.svg',
    'assets/car 9.svg',
    'assets/car 10.svg',
    'assets/car 11.svg',
    'assets/car 12.svg'
];

var your = document.getElementById('your');
// traffic.addEventListener('animationiteration', () => {
//     var random = Math.floor(Math.random() * 4);
//     left = random * 10;
//     console.log(left)
//     traffic.style.left = left + "vw";
// });

let item = document.querySelectorAll('.item')
function incoming() {
    
    let a = vehicles[getRandomInt(0, vehicles.length - 1)];
    traffic.innerHTML += `
        <img src="${a}" alt="" class="item" id="${car}">
    `;
    trafficCars.push(car);
    car++;
    traffic.style.animationDuration = `${getRandomInt(2, 3)}s`;
    var random = Math.floor(Math.random() * 4);
    left = random * 10;
    traffic.style.left = left + "vw";
}
var scoreBox = document.querySelector('.score')
function checkAccident(ride) {
    for (let i = 0; i < trafficCars.length; i++) {
        let car2 = document.getElementById(`${i}`);
        var trafficRect = car2.getBoundingClientRect();
        var rideRect = ride.getBoundingClientRect();
        if (rideRect.bottom > trafficRect.top &&
            rideRect.top < trafficRect.bottom &&
            rideRect.right > trafficRect.left &&
            rideRect.left < trafficRect.right) {
            lives--;
            collisionEvent(car2);
            collisionBool = true;
        }
        // if (trafficRect.bottom <= window.innerHeight) {
        //     collisionEvent(car2);

            
        // }
    }
   
}


var more = document.querySelector('.more')
function gameOver() {
    console.log("Game Over");
    location.href = "gameover.html"
}

function resetGame() {
    // Reset the game state
    lives = maxLives;

    // Reset player-controlled car position
    ride.style.left = '0px';
    ride.style.top = '0px';

    // Reset traffic cars

    // traffic.addEventListener('animationiteration', () => {

    // });
    // }
    more.innerText = lives;
}
incoming(); // Initial traffic car

function collisionEvent(car2) {
    car2.style.display = 'none'
    incoming()
}

setInterval(() => {
    checkAccident(ride)
    more.innerText = `lives: ${lives}`;
    scoreBox.innerText = `score: ${score}`;
},1)
setInterval(() => {
    incoming();
    if(collisionBool){}
    else{
        score+=5   
    }
    collisionBool = false
}, 2500)
ride.style.top = "600px";
var rev = new Audio('assets/acceleration-2-31325.mp3')
var idle = new Audio('assets/rally-car-idle-loop-14-32339.mp3')
// Event listener for player-controlled car movement
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        ride.style.left = parseInt(window.getComputedStyle(ride).left) - 20 + 'px';

    } else if (e.key === 'ArrowRight') {
        ride.style.left = parseInt(window.getComputedStyle(ride).left) + 20 + 'px';
    } else if (e.key === 'ArrowUp') {
        ride.style.top = parseInt(window.getComputedStyle(ride).top) - 2 + 'px';
        if (rev.paused || rev.ended) {
            rev.currentTime = 5;
            rev.play();
        }
    } else if (e.key === 'ArrowDown') {
        ride.style.top = parseInt(window.getComputedStyle(ride).top) + 10 + 'px';
        rev.pause()
        if (idle.paused || idle.ended) {
            idle.currentTime = 5;
            idle.play();
        }
    }
})