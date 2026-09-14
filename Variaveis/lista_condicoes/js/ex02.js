const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    e.preventDefault();
      const permitida = Number(frm.inPermitida.value);
    const condutor = Number(frm.inCondutor.value);

    const limite20 = permitida * 1.20;

    if (condutor <= permitida) {
        resp1.innerText = "Multa Leve";
    } else if (condutor <= limite20) {
        resp1.innerText = "Multa Grave";
    } else {
        resp1.innerText = "Multa Gravíssima";
    }
})