
function adicionar(){
    //resgatar nome do produto e quantidade
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = parseInt(produto.split("$")[1]);
    let quantidade = parseInt(document.getElementById("quantidade").value);
    alert(nomeProduto);
    alert(valorUnitario);
    alert(quantidade);
    
    //calcular produto X quantidade
    let subtotal = parseInt(valorUnitario * quantidade);
    alert(subtotal);

   // alterar no carrinho
   function alterarNoCarrinho(){
        
   }
}