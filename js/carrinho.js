/*let qtdT
function AddCarrinho(produtoadd, qtd, valor, posicao) {
    qtd = parseInt(qtd)
    var produtos = JSON.parse(localStorage.getItem('produtos')) || []
   // Verifique se o produto já está no carrinho
   var produtoExistente = produtos.find(function (item) {
    return item.produto === produtoadd;
    });
    console.log(typeof(qtd))
    if (produtoExistente) {
        // Se o produto já estiver no carrinho, aumente a quantidade
       let peqtd = parseInt(produtoExistente.qtd) 
       
       peqtd += qtd;

       console.log(peqtd)
       produtoExistente.qtd = peqtd
    } else {
        // Caso contrário, adicione o novo produto ao carrinho
        produtos.push({
            produto: produtoadd,
            qtd: qtd,
            valor: valor,
            posicao: posicao
        });
    }

    // Armazene o carrinho atualizado no localStorage
  localStorage.setItem('produtos', JSON.stringify(produtos));
        alert("Produto adicionado ao carrinho!"); 
}

function CompraFinalizada(){
    alert("Compra finalizada com sucesso!\nVolte sempre!")
}

function BoletoGerado(){
    alert("Boleto gerado com sucesso!\nConfira seu email para visualizá-lo!")
}

var total = 0; // variável que retorna o total dos produtos que estão na LocalStorage.
var i = 0; // variável que irá percorrer as posições
var valor = 0; // variável que irá receber o preço do produto convertido em Float.
var produtos = JSON.parse(localStorage.getItem('produtos')) || []
/* for (i = 1; i <= produtos.length; i++) {
    if (prod != null) {
        // exibe os dados da lista dentro da div itens
        document.getElementById("itens").innerHTML += localStorage.getItem("qtd" + i) + " x ";      
        document.getElementById("itens").innerHTML += localStorage.getItem("produto" + i);
        document.getElementById("itens").innerHTML += " ";
        document.getElementById("itens").innerHTML += "R$: " + localStorage.getItem("valor" + i) + "<hr>";


        // calcula o total dos recheios
        valor = parseFloat(localStorage.getItem("valor" + i)); // valor convertido com o parseFloat()
        qtds = parseInt(localStorage.getItem("qtd" + i))
        total = (total + valor); // arredonda para 2 casas decimais com o .toFixed(2)
    }
} */

/*var itensHtml = ''; // Inicialize uma variável para armazenar o HTML dos itens

produtos.forEach(function (produto) {
    itensHtml += produto.qtd + "x " + produto.produto + " ";
    itensHtml += "R$: " + produto.valor * produto.qtd+ "<hr>";
    
    total = (total + (parseFloat(produto.valor) * produto.qtd))
});

// Atualize o elemento "itens" uma única vez após construir o HTML
document.getElementById("itens").innerHTML = itensHtml;
// exibe o total dos recheios
document.getElementById("total").innerHTML = total.toFixed(2);
*/

function AddCarrinho(produtoadd, qtd, valor, posicao) {
    qtd = parseInt(qtd)
    var produtos = JSON.parse(localStorage.getItem('produtos')) || []
    
    var produtoExistente = produtos.find(function (item) {
        return item.produto === produtoadd;
    });
    
    console.log(typeof(qtd))
    
    if (produtoExistente) {
        let peqtd = parseInt(produtoExistente.qtd) 
        peqtd += qtd;
        console.log(peqtd)
        produtoExistente.qtd = peqtd
    } else {
        produtos.push({
            produto: produtoadd,
            qtd: qtd,
            valor: valor,
            posicao: posicao
        });
    }

    localStorage.setItem('produtos', JSON.stringify(produtos));
    alert("Produto adicionado ao carrinho!"); 
}

function RemoveProduto(produto) {
    var produtos = JSON.parse(localStorage.getItem('produtos')) || []
    var produtoExistente = produtos.find(function (item) {
        return item.produto === produto;
    });

    if (produtoExistente) {
        let peqtd = parseInt(produtoExistente.qtd);
        if (peqtd > 1) {
            peqtd--;
            produtoExistente.qtd = peqtd;
        } else {
            produtos = produtos.filter(item => item.produto !== produto);
        }

        localStorage.setItem('produtos', JSON.stringify(produtos));
        AtualizarCarrinho();
    }
}

function AtualizarCarrinho() {
    var total = 0;
    var produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    var itensHtml = '';

    produtos.forEach(function (produto) {
        itensHtml += produto.qtd + "x " + produto.produto + " ";
        itensHtml += "R$: " + (produto.valor * produto.qtd).toFixed(2).replace('.', ',') + " "; // Substitui ponto por vírgula
        itensHtml += "<button class='direito material-icons' onclick=\"RemoveProduto('" + produto.produto + "')\">delete</button>";
        itensHtml += "<hr>";

        total += parseFloat(produto.valor) * produto.qtd;
    });

    document.getElementById("itens").innerHTML = itensHtml;
    document.getElementById("total").innerHTML = "Total: R$ " + total.toFixed(2).replace('.', ','); // Substitui ponto por vírgula
}

AtualizarCarrinho();





  