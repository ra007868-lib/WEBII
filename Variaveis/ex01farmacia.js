const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const remedio = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)
    const promocao = preco * 2
    const promocaocomdesconto = Math.floor(promocao)
    resp.innerText = `Promoção ${remedio} \n Leve 2 por apenas R$ ${promocaocomdesconto.toFixed(2)}`
    e.preventDefault()
})
