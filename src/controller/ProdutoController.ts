import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository{

      private _listaProdutos: Array<Produto> = new Array<Produto>();
      produtoId:number = 0;

      public gerarId(): number{
            return ++ this.produtoId;
      };

      public buscarProduto(id: number): Produto | null {
            for(let produto of this._listaProdutos){
                  if(produto.id === id){
                        return produto;
                  };
            };
            return null;
      };

      //metodos crud
      cadastrar(produto: Produto): void {
            this._listaProdutos.push(produto);
            console.log(`\n${produto.name} cadastrado com sucesso!`);
      };

      listar(): void {
            for(let produto of this._listaProdutos){
                  console.log(produto.detailProduct());
            };
      };

      atualizar(produto: Produto): void {
            let buscarProduto = this.buscarProduto(produto.id);
            if(buscarProduto != null){
                  this._listaProdutos[this._listaProdutos.indexOf(buscarProduto)] = produto;
                  console.log(`\nO produto ID: ${produto.id} foi atualizado com sucesso!`);
            } else{
                  console.log(`\nO produto ID: ${produto.id} não foi encontrado!`);
            };
      };

      deletar(id: number): void {
            let buscaProduto = this.buscarProduto(id);
            if(buscaProduto != null){
                  this._listaProdutos.splice(this._listaProdutos.indexOf(buscaProduto), 1);
                  console.log(`\nO produto ID: ${id} foi apagado com sucesso!`);
            } else{
                  console.log(`\nO produto ID: ${id} não foi encontrado!`);
            };
      };

      procurarPorId(id: number): void {
            let buscaProduto = this.buscarProduto(id);
            if(buscaProduto != null){
                  console.log(buscaProduto.detailProduct());
            }else{
                  console.log(`\nO produto ID: ${id} não foi encontrado!`);
            };
      };

      //metodos especificos
      atualizarEstoque(id: number, quantidade: number): void {
            let buscarProduto = this.buscarProduto(id);
            if(buscarProduto != null){
                  buscarProduto.increaseStock(quantidade);
                  console.log(`\nO estoque do produto ID: ${id} foi atualizado com sucesso!`);
            } else{
                  console.log(`\nO produto ID: ${id} não foi encontrado!`);
            }
      };
      atualizarPreco(id: number, novoPreco: number): void {
            let buscarProduto = this.buscarProduto(id);
            if(buscarProduto != null){
                  buscarProduto.changePrice(novoPreco);
                  console.log(`\nO preço do produto ID: ${id} foi atualizado com sucesso!`);
            } else{
                  console.log(`\nO produto ID: ${id} não foi encontrado!`);
            };
      };
      verificarEstoque(id: number, quantidade: number): boolean {
            let buscarProduto = this.buscarProduto(id);
            if(buscarProduto != null){
                  return buscarProduto.isInStock(quantidade);
            } else{
                  console.log(`\nO produto ID: ${id} não foi encontrado!`);
                  return false;
            };
      }; 
};