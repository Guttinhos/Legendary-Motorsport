const produtos = [
  {
    id: 0,
    nome: "P ZERO™ CORSA SYSTEM",
    img: "./img/Produtos/P-zero-corsa-system-3-4-1505470088408.jpg",
    descricao: "Manobrável e seguro nas estrada e nas pistas",
    preco: 500,
  },

  {
    id: 1,
    nome: "Kit 4 Pneus Aro 20 Audi rs6",
    img: "./img/Produtos/Foto pneu.jpg",
    descricao:"Alta Performance, grande desempenha em estradas e otimo conforto",
    preco: 759.99,
  },

  {
    id: 2,
    nome: "Jogo de tapete PVC para carro Renault",
    img: "./img/Produtos/tapete2.jpg",
    descricao:"Jogo de Tapetes Automotivos PVC Antiderrapante Universal Lavável 4 Peças Preto",
    preco: 400,
  },

  {
      id: 3,
      nome: "Kit 10 Aromatizante Cheirinho Carro.",
      img: "./img/Produtos/arvore.jpg",
      descricao:"Kit 10 Aromatizante Folhinha Cheirinho P/ Carro Perfume - Kit com Fragrâncias sortidas",
      preco: 57.99,
  },

  {
    id: 4,
    nome: "Kit De Emergência P/ Automóvel",
    img: "./img/Produtos/kit-ferramenta.jpg",
    descricao:"Excelente Maleta para Emergência Automotiva da Eda 9NU com Cabo de bateria para chupeta (auxiliar de partida), Ferramentas diversas, Lanterna, Apito, e outros",
    preco: 101.91,
  }

];

const listaCep = [
  {
    nome: "Grande São paulo",
    valor: 15,
  },

  {
    nome: "Interior de São Paulo",
    valor: 18,
  },

  {
    nome: "Rio de Janeiro e Espírito Santo",
    valor: 20,
  },

  {
    nome: "Minas Gerais",
    valor: 13,
  },

  {
    nome: "Bahia e Sergipe",
    valor: 5,
  },

  {
    nome: "Pernambuco, Alagoas, Paraíba e Rio Grande do Norte",
    valor: 12,
  },

  {
    nome: "Ceará, Piauí, Maranhão, Pará, Amazonas, Acre, Amapá e Roraima",
    valor: 19,
  },

  {
    nome: "Distrito Federal, Goiás, Tocantins, Mato Grosso, Mato Grosso do Sul e Rondônia",
    valor: 14,
  },

  {
    nome: "Paraná e Santa Catarina",
    valor: 22,
  },

  {
    nome: "Rio Grande do Sul",
    valor: 25,
  },
];
const listaPedidos = [];

var lista = "";
produtos.map((produto) => {
  lista += `
    <div class="produto">
        <h3>${produto.nome}</h3>
        <img width="100" src="${produto.img}" alt="Foto pneu">
        <p>${produto.descricao} </p>
        <p>Quantidade: </p>
        <input class="qtditems" type="number" id="qtditem${produto.id}">
        <p class="valor" id="preco3">
            Valor: R$ ${produto.preco}
        </p>
    </div>
  `;
});
document.querySelector(".lista-produto").innerHTML = lista;

function calcularElementos() {
  const elementos = document.querySelectorAll(".produto");
  const cep = parseInt(document.querySelector("#cep").value.charAt(0));
  let valorTotal = 0;
  elementos.forEach((element, index) => {
    if (element.querySelector(".qtditems").value > 0) {
      const item = {
        produto: produtos[index],
        quantidade: parseInt(element.querySelector(".qtditems").value),
      };
      listaPedidos.push(item);
      valorTotal += parseFloat(item.produto.preco * item.quantidade);
    }
  });

  if (cep >= 0) {
    valorTotal += parseFloat(listaCep[cep].valor);
  } else {
    return alert("Informe o cep");
  }

  if (listaPedidos.length < 1) {
    return alert("Selecione ao menos um produto");
  }

  document.getElementById(
    "localfrete"
  ).innerHTML = `  O Valor do frete para  ${listaCep[cep].nome}  é de  R$  ${listaCep[cep].valor} Reais `;
  document.getElementById(
    "valorfinal"
  ).innerHTML = `O valor total com o frete e o produto é de R$ ${valorTotal.toFixed(2).replace('.', ',')} Reais `;
}
