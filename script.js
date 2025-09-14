let circleContainer = document.querySelector('.circleContainer');
let target = document.querySelector('.target');
let score = document.querySelector('.score');
let time = document.querySelector('.time');
let endResult = document.querySelector('.endResult');
let finalScore = document.querySelector('.finalScore');
let restartBtn = document.querySelector('.restartBtn');
let initialTime = Number(time.innerText);
const totalCircles = 66;
let result = 0;
let tar;

function renderNumber(){
    circleContainer.innerHTML = '';
    for(let i=1;i<=totalCircles;i++){
        let div = document.createElement('div');
        div.className = 'circle';
        let num = Math.ceil(Math.random()*10);
        div.innerText = num;
        circleContainer.append(div);
    }
}

function generateTarget(){
    tar = Math.ceil(Math.random()*10);
    target.innerText = tar;
}

function handleTime(t){
    time.innerText = t;
    let intervalId = setInterval(() => {
        if(t===0){
            endGame();
            clearInterval(intervalId);
            return;
        }
        t--;
        time.innerText = t;
    }, 1000);
}

function endGame(){
    circleContainer.style.display = 'none';
    finalScore.innerText = result;
    endResult.style.display = 'flex';
}

function handleGame(){
    renderNumber();
    handleTime(initialTime);
    generateTarget();

    circleContainer.addEventListener('click',event=>{
        if(event.target.className==='circle'){
            if(parseInt(event.target.innerText) === tar) {
                result++;
                score.innerText = result;
            }
            renderNumber();
            generateTarget();
        }
    });    
}

function handleRestart() {
    restartBtn.addEventListener('click',()=>{
        circleContainer.style.display = 'flex';
        result = 0;
        score.innerText = result;
        endResult.style.display = 'none';
        handleGame();
    });
}

handleGame();
handleRestart();