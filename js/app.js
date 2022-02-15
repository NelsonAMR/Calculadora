var btn = document.getElementsByClassName('btn');
var screen = document.querySelector('.screen');

var botones = Array.from(btn);

botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        console.log(boton.value);
        calculadora(boton, screen);
    })
});

function calculadora(boton, screen){
    switch(boton.value){
        case 'C':
            borrar(screen);
            break;

        case '=':
            calcular(screen);
            break;

        default:
            actualizar(screen, boton);
            break;
    }
}

function calcular(screen){
    screen.innerHTML = eval(screen.innerHTML);
}

function actualizar(screen, boton){
    if(boton.value != 'x'){
        if(screen.innerHTML == 0) screen.innerHTML = '';
        screen.innerHTML += boton.value;
    }

    else{
        if(screen.innerHTML == 0) screen.innerHTML = '';
        screen.innerHTML += '*';
    }
}

function borrar(screen){
    screen.innerHTML = '';
}
