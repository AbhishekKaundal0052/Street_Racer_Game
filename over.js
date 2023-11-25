var realScore=document.getElementById("score")
let messageBox = document.getElementById('message')
let score =localStorage.getItem('score');
let nickname = localStorage.getItem('nickname')
console.log(score)
realScore.innerText = "Score: " + score;
messageBox.innerText = "Well done " + nickname + " !!";


