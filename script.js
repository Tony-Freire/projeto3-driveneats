
let prato;
let bebida;
let sobremesa;
let valorPrato;
let valorBebida;
let valorSobremesa;
let valorTotal;
let soma;

function escolherPrato(produto){
   prato = document.querySelector(".pratos-principais .selecionado");

   if(prato !== null){
      prato.classList.remove("selecionado");
   }
   
   prato = produto;
   produto.classList.add("selecionado");
   desbloquear()   
}

function escolherBebida(produto){
    bebida = document.querySelector(".bebidas .selecionado");
   if(bebida !== null){
      bebida.classList.remove("selecionado");
   }

   produto.classList.add("selecionado");

   bebida = produto;

   desbloquear();
}

function escolherSobremesa(produto){
   sobremesa = document.querySelector(".sobremesas .selecionado");
   if(sobremesa !== null){
      sobremesa.classList.remove("selecionado");
   }

   produto.classList.add("selecionado");

   sobremesa = produto;

   desbloquear();
}

function desbloquear(){
   let botao = document.querySelector(".botao-finalizar");
   if(prato !== undefined && bebida !== undefined && sobremesa !== undefined){
      botao.classList.add("botao-liberado");
      botao.disabled = false;
      botao.innerHTML = "Fechar pedido";
   }
}
function formatReal( Number )
{
        var tmp = Number+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
}

function getMoney( str )
{
        return Number( str.replace(/[\D]+/g,'') );
}
function confirmar(){
   nomePrato = prato.querySelector(".nome-produto").innerHTML;
  
   nomeBebida = bebida.querySelector(".nome-produto").innerHTML;
   nomeSobremesa = sobremesa.querySelector(".nome-produto").innerHTML;
   document.querySelector(".confirmar-pedido").classList.remove("ocultar");
   
   document.querySelector(".nome-prato").innerHTML = nomePrato;
   document.querySelector(".nome-bebida").innerHTML = nomeBebida;
   document.querySelector(".nome-sobremesa").innerHTML = nomeSobremesa;
   
   valorPrato = prato.querySelector(".preco-produto").innerHTML;
   valorBebida = bebida.querySelector(".preco-produto").innerHTML;
   valorSobremesa = sobremesa.querySelector(".preco-produto").innerHTML;

   document.querySelector(".preco-prato").innerHTML = valorPrato;
   document.querySelector(".preco-bebida").innerHTML = valorBebida;
   document.querySelector(".preco-sobremesa").innerHTML = valorSobremesa;
  
   soma = (getMoney(valorPrato) + getMoney(valorBebida) + getMoney(valorSobremesa));
   valorTotal = formatReal(soma)
   document.querySelector(".preco-total span").innerHTML = valorTotal;
   let msg = mensagem();

   document.querySelector(".botao-confirmar").innerHTML =`<a href="https://wa.me/5521965010929?text=${msg}">
   Tudo certo, pode pedir!</a>`;
}

function mensagem(){
  let txt = encodeURIComponent(`Olá, gostaria de fazer o pedido:
  - Prato: ${nomePrato}
  - Bebida: ${nomeBebida}
  - Sobremesa: ${nomeSobremesa}
  Total: R$ ${valorTotal}`);

  return txt;
}

function cancelar()
{
   location.reload();
}
