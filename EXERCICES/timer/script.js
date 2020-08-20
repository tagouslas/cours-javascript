let btn = document.querySelector('button');

let secondes = 10;
let interval;

function start() { 
    interval = setInterval(decompte, 1000);
}

function stop() { 
    clearInterval(interval);
    alert('Stop !');
}

function decompte() {

    secondes--;
    
    if (secondes == 0) {
        stop();
    }else{
        document.body.innerHTML += '<br>'+secondes
    }
}




btn.addEventListener('click', start);