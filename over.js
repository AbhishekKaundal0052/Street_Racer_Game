var realScore=document.getElementById("score")

let score =localStorage.getItem('score');
console.log(score)
realScore.innerText = "Score: "+score;