var nome = "João";
var pedidoLanche = "Big bacon";
var pedidoBebida = "Coca 120ML";
var sobremesa = "Chocolate"

function lista(){
    return document.body.innerHTML = `<h1>Pedido feito!</h1>
                                      <p> O cliente: ${nome} fez um pedido!</p>
                                      <p> Um lanche: ${pedidoLanche}
                                      <p> Um refrigerante: ${pedidoBebida}</p>
                                      <p> E uma sobremesa: ${sobremesa}`;
}