const screen = document.querySelector(".screen");

let screenBuffer = '0';

function handleButtonClick(value) {
    console.log(value);

    if( isNaN(parseInt(value))) {
        handleNonNumber(value);
    } else {
        handleNumber(value);
    }

    rerender();

}
function handleNonNumber(value) {
    if(value==='C' || value==='c') {
        screenBuffer = '0';
    }
}
function handleNumber(value) {
    if( screenBuffer === '0' ) {
        screenBuffer = value;
    } else {
        screenBuffer += value;
    }
}

function rerender()  {
    screen.innerText = screenBuffer;
}

function initialize() {
    // console.log("initialize");
    document.querySelector(".calc-container").addEventListener("click", function(event) {
        handleButtonClick(event.target.innerText);
    });
    rerender();
}

initialize();