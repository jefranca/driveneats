let comidapedida;
let bebidapedida;
let sobremesapedida;
let valorcomida;
let valorbebida;
let valorsobremesa;
let valortotal ;

function selecionar(selecionada , tipo){

    //checar se tem algum item selecionado.
    const ve_se_ta_selecionado = document.querySelector("." + tipo + " .borda-selecionada");
    if(ve_se_ta_selecionado !== null){
        ve_se_ta_selecionado.classList.remove("borda-selecionada");
    }

    //selecionar o item o qual desejo consumir
    selecionada.classList.add("borda-selecionada");

    atualizarpedido(tipo);
    trocarbotao();
}
    

function atualizarpedido(tipo)
{
    //salvar o pedido e o valor do pedido
    if(tipo === "comida"){
        comidapedida = document.querySelector("." + tipo + " .borda-selecionada h2").innerHTML;
        valorcomida = document.querySelector("." + tipo + " .borda-selecionada h3").innerHTML;
    }
    if(tipo === "bebida"){
        bebidapedida = document.querySelector("." + tipo + " .borda-selecionada h2").innerHTML;
        valorbebida = document.querySelector("." + tipo + " .borda-selecionada h3").innerHTML;
    }
    if(tipo === "sobremesa"){
        sobremesapedida = document.querySelector("." + tipo + " .borda-selecionada h2").innerHTML;
        valorsobremesa = document.querySelector("." + tipo + " .borda-selecionada h3").innerHTML;
    }

}

function convertepreco()
{
    /*Apos fechar o primeiro pedido, as variaveis de valores viram numeros
    logo a funcao valor.replace estava retornando erro. Para resolver a situação vou concatenar para
    ter certeza de que antes de usar a função replace, o valor seja uma string. Assim é possivel fazer um
    segundo pedido sem precisar atualizar a pagina */
    valorcomida = valorcomida + "";
    valorcomida = valorcomida.replace("R$ ", "");
    valorcomida = valorcomida.replace(",",".");
    valorcomida = Number(valorcomida);

    valorbebida = valorbebida + "";
    valorbebida = valorbebida.replace("R$ ", "");
    valorbebida = valorbebida.replace(",",".");
    valorbebida = Number(valorbebida);

    valorsobremesa= valorsobremesa+ "";
    valorsobremesa = valorsobremesa.replace("R$ ", "");
    valorsobremesa = valorsobremesa.replace(",",".");
    valorsobremesa = Number(valorsobremesa);

    valortotal = valorcomida + valorbebida + valorsobremesa;
    valortotal = valortotal.toFixed(2);
}

function trocarbotao()
{
    const botaopronto = document.querySelector(".botao-pronto");
    const botaoinicial = document.querySelector(".botao-rodape");
    /*DUVIDA
    o codigo funciona dessa forma que não sei se poderia ser utilizada e também funciona colocando
    [comidapedida === true && bebidapedida === true && sobremesapedida === true]
    eu queria entender se isso está correto ou se eu deveria sempre usar o true*/
    if(comidapedida && bebidapedida && sobremesapedida) {
        botaoinicial.classList.add("escondido");
        botaopronto.classList.remove("escondido");
    }
}

// https://wa.me/númerodetelefonenowhatsapp?text=
function mandarmensagem()
{
    convertepreco();
    let detalhePedido= "Olá, gostaria de fazer o pedido: %0A - Prato: " + comidapedida + "- Bebida: " + bebidapedida + "- Sobremesa:" + sobremesapedida + "Total: R$ " + valortotal;
    let site = "https://wa.me/5532998002025?text=" + encodeURIComponent(detalhePedido);
    site = site.replace("%250A%20","%0A");
    window.open(site);
}