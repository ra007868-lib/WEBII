const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    const valor = preco * 3
    const descont = preco / 2
    const valorFinal = valor - descont
    resp.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorFinal.toFixed(2)} \n O 3° produto sai a R$: ${descont.toFixed(2)}`
    e.preventDefault() 
})