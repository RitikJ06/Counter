function incrementCount(){
    let counter = document.getElementsByClassName('count')[0];
    currentCount = parseInt(counter.innerText);
    currentCount += 1;
    counter.innerText = currentCount;
}

function decrementCount(){
    let counter = document.getElementsByClassName('count')[0];
    currentCount = parseInt(counter.innerText);
    if(currentCount > 0){
        currentCount -= 1;
    }
    counter.innerText = currentCount;
}


let incrementBtn = document.getElementById('increment');
incrementBtn.addEventListener('click', incrementCount);

let decrementBtn = document.getElementById('decrement');
decrementBtn.addEventListener('click', decrementCount);