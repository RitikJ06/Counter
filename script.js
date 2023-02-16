function incrementCount(){
    let counter = document.getElementsByClassName('count')[0];
    currentCount = parseInt(counter.innerText);
    currentCount += 1;
    counter.innerText = currentCount;
}

function resetCount(){
    let counter = document.getElementsByClassName('count')[0];
    counter.innerText = '0';
}

let incrementBtn = document.getElementById('increment');
incrementBtn.addEventListener('click', incrementCount);

let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', resetCount);