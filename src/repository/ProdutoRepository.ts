import { Produto } from "../model/Produto";

export interface ProdutoRepository{
      // CRUD
      cadastrar(produto: Produto): void;
      listar(): void;
	atualizar(produto: Produto): void;
	deletar(id: number): void;
	procurarPorId(id: number): void;
	
      // operações adicionais
      atualizarEstoque(id: number, quantidade: number): void;
      atualizarPreco(id: number, novoPreco: number): void;
      verificarEstoque(id: number, quantidade: number): boolean;
};