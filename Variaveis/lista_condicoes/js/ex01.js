const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const numero = Number(frm.inNumero.value);
    let resposta = numero;
    if(numero % 2 === 0){
        alert(`O número é Par!`)
    } else {
        alert(`O numero é Impar`)
    }
    

})