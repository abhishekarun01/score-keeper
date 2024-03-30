const button1 = document.querySelector('#p1Add');
const button2 = document.querySelector('#p2Add');
const button3 = document.querySelector('#new');
const reset = document.querySelector('#reset');
const span1 = document.querySelector('#p1Score');
const span2 = document.querySelector('#p2Score');
const select = document.querySelector('#selector');
let isGameOver = false;
let winScore = 11;
let currScore1 = 0;
let currScore2 = 0;

select.disabled = true;

select.addEventListener("change", function () {
    winScore = parseInt(this.value);
})

button1.addEventListener('click', function () {
    if (!isGameOver) {
        currScore1 = parseInt(span1.innerText);
        span1.innerText = `${++currScore1}`;

        if (currScore1 === (winScore - 1) && currScore2 == (winScore - 1)) {
            winScore += 1;
        }

        if (currScore1 === winScore) {
            span1.style.color = "green";
            span2.style.color = "red";
            isGameOver = true;
            button1.disabled = true;
            button2.disabled = true;
        }
    }
})

button2.addEventListener('click', function () {
    if (!isGameOver) {
        currScore2 = parseInt(span2.innerText);
        span2.innerText = `${++currScore2}`;

        if (currScore1 === (winScore - 1) && currScore2 == (winScore - 1)) {
            winScore += 1;
        }

        if (currScore2 === winScore) {
            span1.style.color = "red";
            span2.style.color = "green";
            isGameOver = true;
            button1.disabled = true;
            button2.disabled = true;
        }
    }
})

reset.addEventListener('click', rst)

function rst() {
    span1.innerText = '0';
    span1.style.color = 'black';
    span2.innerText = '0';
    span2.style.color = 'black';
    isGameOver = false;
    button1.disabled = false;
    button2.disabled = false;
    currScore1 = 0;
    currScore2 = 0;
}
