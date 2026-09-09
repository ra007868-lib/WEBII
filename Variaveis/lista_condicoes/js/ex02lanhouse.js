const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)
    const valorpormin = valor / 15
    const valorfinal = valorpormin * tempodividido
    resp.innerText = `Valor a pagar R$ ${valorfinal.toFixed(2)}`
    e.preventDefault()

})