let valorTotal = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("total").innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotal}</span>`

function adicionar(){
    //resgatar nome do produto e quantidade
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = parseInt(produto.split("$")[1]);
    let quantidade = parseInt(document.getElementById("quantidade").value);
    
    //calcular produto X quantidade
    let subtotal = parseInt(valorUnitario * quantidade);

   // alterar no carrinho
   let carrinho = document.getElementById("lista-produtos");
   carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;
    valorTotal = valorTotal + subtotal;

    let total = document.getElementById("total")
    total.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotal}</span>`

    //limpar quantidade
    document.getElementById("quantidade").value = " ";
}

function limpar(){
    let carrinho = document.getElementById("lista-produtos");
   carrinho.innerHTML = "";

   let total = document.getElementById("total")
   total.innerHTML =  `Total: <span class="texto-azul" id="valor-total">R$0</span>`;
}