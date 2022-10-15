/* Agregação */
//Similar a associação
//Ex: Carrinho de comprar e produtos, ambos existem um sem o outros, porém o carrinho de comprar perde o sentido sem produto

export class CarrinhoDeCompras {
  private readonly produtos: Array<Produto> = [];

  insertProducts(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const camisa = new Produto('Camiseta', 49.99);
const caneca = new Produto('Caneca', 5.99);
const caneta = new Produto('Canetaa', 0.99);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.insertProducts(camisa, caneca, caneta);
console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());
