'use strict';

const screen = document.querySelector(".screen");


let screenBuffer    = '0';
let val1            = 0;
let val2            = 0;
let bufferOp        = undefined;


function handleButtonClick(value) {
    switch(value) {
        case 'C':
            resetCalculator();
            break;
        case '=':
            val2 = parseInt(screenBuffer);
            screenBuffer = bufferOp(val1,val2) || 0; 
            break;
        case '+':
            val1 = parseInt(screenBuffer);
            screenBuffer = 0;
            bufferOp = (p1,p2) => { return p1 + p2; };
            break;
        case '-':
            val1 = parseInt(screenBuffer);
            screenBuffer = 0;
            bufferOp = (p1,p2) => { return p1 - p2 };
            break;
        case 'x':
            val1 = parseInt(screenBuffer);
            screenBuffer = 0;
            bufferOp = (p1,p2) => { return p1 * p2 };
            break;
        case '%':
            val1 = parseInt(screenBuffer);
            screenBuffer = 0;
            bufferOp = (p1,p2) => { return p2 === 0 ? -1 : p1/p2 };
            break;
        default:
            // we are a number
            screenBuffer = screenBuffer=='0' ? value : screenBuffer + value; 
            break;
    }
    // console.log( "val1[" + val1 + "] val2[" + val2 + "] bufferOp[" + bufferOp + "]");
    rerender();

}
function resetCalculator() {
    screenBuffer    = '0';
    val1            = 0;
    val2            = 0;
    bufferOp        = undefined;
}


function rerender()  {
    screen.innerText = screenBuffer;
}

function initialize() {
    document.querySelector(".calc-actions").addEventListener("click", function(event) {
        handleButtonClick(event.target.innerText);
    });
    rerender();
}

initialize();