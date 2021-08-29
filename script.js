
const botones = document.querySelectorAll('.button');
const output = document.querySelector('.output');
let actual = 0;
let action = '';
const acciones = {
    "%" : "%",
    "/" : "/",
    "+" : "+",
    "-" : "-",
    "x" : "*"
};

botones.forEach(boton => {
    boton.addEventListener('click',(e)=>{
        
        const valor = e.target.innerText;
        const valorNumero = parseInt(valor);
        
        if(isNaN(valorNumero)){
            if(valor === "C"){
                action = null;
                actual = 0;
                output.textContent = actual;
            }
            else{
                if(action && action !== "="){
                    let calcular = actual + acciones[action] + output.textContent;
                    output.textContent = eval(calcular);
                }
                actual = parseInt(output.textContent);
                action = valor;
            }
            
        }
        else{
            if(actual === parseInt(output.textContent)){
                output.textContent = valorNumero;
            }
            else{
                output.textContent += valorNumero;
            }
        }
    });
});
