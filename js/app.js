
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML='';
let total = 0;
document.getElementById('valor-total').textContent = `R$ 0`;
function adicionar(){
// Caputurar informação do site
    let produto = document.getElementById('produto').value;
    let item = produto.split('-') [0];
    let valor = produto.split('R$') [1];
    let quantidade = document.getElementById('quantidade').value;
    document.getElementById('quantidade').value='';
// Efetuar as devidas operações de valores
    let valorTotal = valor * quantidade;
// imprimir informações na tela valor total/carrinho atualizado
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${item} <span class="texto-azul">R$${valorTotal}</span>
        </section>`;
    total= total + valorTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${total}`;

}