const numbers = document.querySelectorAll('.number'),
    ball = document.querySelectorAll('.activ_ball'),
    clearBtn = document.querySelector('.operator'),
    resultBtn = document.getElementById('result'),
    deleteBtn = document.getElementById('delete');
let firstNumber;
let secondNumber;

const numPress = (num) => {
    display.value === '0' ? display.value = num : display.value += num;
}

for(let i = 0; i < numbers.length; i++ ){
    //console.log(i)
    const number = numbers[i];
    number.addEventListener('click', (e) => {
        numPress(e.target.textContent);
    });
}

clearBtn.addEventListener('click', e => location.reload());
deleteBtn.addEventListener('click', e => display.value = '0')

function testNumber () {
    firstNumber = Math.ceil(Math.random()*100);
    secondNumber = Math.ceil(Math.random()*100);
    if(secondNumber >= firstNumber) return testNumber ();
    console.log(firstNumber - secondNumber);
    return ball.textContent = `${firstNumber} - ${secondNumber}`;
}

function startBall() {
    testNumber();
    let start = Date.now();
     ball.style.visibility = 'visible';
     let timer = setInterval(function() {
     let timePassed = Date.now() - start;
     //console.log(ball.offsetTop);
     ball.style.top = timePassed / 10 + 'px';
     if(ball.offsetTop >= 400) clearInterval(timer);
    }, 20)
}

function operation (){
    let result = firstNumber - secondNumber;
    //console.log(typeof display.value)
    if(+display.value === result){
        display.value = '0';
        ball.style.visibility = 'hidden';
        startBall();
    } else document.querySelector('.score').innerHTML = "ERROR"
}

resultBtn.addEventListener('click', operation);

