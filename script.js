function incrementCount(){
    let counter = document.getElementsByClassName('count')[0];
    currentCount = parseInt(counter.innerText);
    currentCount += 1;
    counter.innerText = currentCount;
}
function decrementCount(){
    let counter = document.getElementsByClassName('count')[0];
    currentCount = parseInt(counter.innerText);

    currentCount = currentCount <= 0 ? 0 : currentCount - 1;
    counter.innerText = currentCount;
}

function resetCount(){
    let counter = document.getElementsByClassName('count')[0];
    counter.innerText = '0';
}

let incrementBtn = document.getElementsByClassName('increment')[0];
incrementBtn.addEventListener('click', incrementCount);

let decrementBtn = document.getElementsByClassName('decrement')[0];
decrementBtn.addEventListener('click', decrementCount);

let resetBtn = document.getElementsByClassName('reset')[0];
resetBtn.addEventListener('click', resetCount);