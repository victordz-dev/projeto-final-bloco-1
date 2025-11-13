import read from "readline-sync";
import { Roupa } from "./src/model/Roupa";
import { Acessorio } from "./src/model/Acessorio";
import { ProdutoController } from "./src/controller/ProdutoController";

let opcao:number;

let produtos: ProdutoController = new ProdutoController();

let name, material: string;
let price, inStock, category, id: number;

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    read.prompt();
}


export function main(){
      
      while (true) {

            console.log(`
            *****************************************************

                              ECOMMERCE - ECOTREND    
                  Sua loja de produtos ecologicamente sustentáveis!            

            *****************************************************
                       
            ---GESTÃO DE PRODUTOS---
            1 - Cadastrar produto                        
            2 - Listar produtos              
            3 - Buscar produto por id             
            4 - Atualizar produto          
            5 - Apagar produto 

            ---GESTÃO DE ESTOQUE---
            6 - Registrar entrada de estoque          
            7 - Registrar saída de estoque
            8 - Alterar preço do produto
            9 - Verficar disponibilidade em estoque
            0 - Sair                                 

            *****************************************************
            `);

            opcao = read.questionInt("Digite a opção desejada: ");

            switch(opcao){
                  case 1:
                        console.log("\n\nCadastrar produto\n\n");
                        name = read.question("Digite o nome do produto: ");
                        price = read.questionFloat("Digite o preço do produto: ");
                        inStock = read.questionInt("Digite a quantidade em estoque: ");
                        category = read.questionInt("Selecione a categoria do produto: \n1 - Roupa\n2 - Acessório\n3 - Outro\n");
                        material = read.question("Digite o material do produto: ");

                        switch(category){
                              case 1:
                                    let size = read.question("Digite o tamanho da roupa: ");
                                    let color = read.question("Digite a cor da roupa: ");
                                    produtos.cadastrar(
                                          new Roupa(produtos.gerarId(), price, name, inStock, category, size, color, material));
                                    break;
                              case 2:
                                    let type = read.question("Digite o tipo do acessório: ");
                                    produtos.cadastrar(
                                          new Acessorio(produtos.gerarId(), price, name, inStock, category, type, material));
                                    break;
                        };
                        keyPress();
                        break;
                  case 2:
                        console.log("\n\nListar produtos\n\n");
                        produtos.listar();
                        keyPress();
                        break;
                  case 3:
                        console.log("\n\nBuscar produto por id\n\n");
                        id = read.questionInt("Digite o ID do produto: ");
                        produtos.procurarPorId(id);
                        keyPress();
                        break;
                  case 4:
                        console.log("\n\nAtualizar produto\n\n");
                        id = read.questionInt("Digite o ID do produto: ");
                        name = read.question("Digite o nome do produto: ");
                        price = read.questionFloat("Digite o preço do produto: ");
                        inStock = read.questionInt("Digite a quantidade em estoque: ");
                        category = read.questionInt("Selecione a categoria do produto: \n1 - Roupa\n2 - Acessório\n3 - Outro\n");
                        material = read.question("Digite o material do produto: ");
                        switch(category){
                              case 1:
                                    let size = read.question("Digite o tamanho da roupa: ");
                                    let color = read.question("Digite a cor da roupa: ");
                                    produtos.atualizar(
                                          new Roupa(id, price, name, inStock, category, size, color, material));
                                    break;
                              case 2:    
                                    let type = read.question("Digite o tipo do acessório: ");
                                    produtos.atualizar(
                                          new Acessorio(id, price, name, inStock, category, type, material));
                                    break;
                        };
                        keyPress();
                        break;
                  case 5:
                        console.log("\n\nApagar produto\n\n");
                        id = read.questionInt("Digite o ID do produto: ");
                        produtos.deletar(id);
                        keyPress();
                        break;
                  case 6:
                        console.log("\n\nRegistrar entrada de estoque\n\n");
                        id = read.questionInt("Digite o ID do produto: ");
                        let quantidadeEntrada = read.questionInt("Digite a quantidade a ser adicionada ao estoque: ");
                        produtos.atualizarEstoque(id, quantidadeEntrada);
                        keyPress();
                        break;
                  case 7:
                        console.log("\n\nRegistrar saída de estoque\n\n");
                        id = read.questionInt("Digite o ID do produto: ");
                        let quantidadeSaida = read.questionInt("Digite a quantidade a ser retirada do estoque: ");
                        let produto = produtos.buscarProduto(id);
                        if(produto != null){
                              if(produto.isInStock(quantidadeSaida)){
                                    produto.reduceStock(quantidadeSaida);
                                    console.log(`\nSaída de ${quantidadeSaida} unidade(s) do produto ID: ${id} registrada com sucesso!`);
                              } else{
                                    console.log(`\nEstoque insuficiente para o produto ID: ${id}!`);
                              };
                        }
                        keyPress();
                        break;
                  case 8:
                        console.log("\n\nAlterar preço do produto\n\n");
                        id = read.questionInt("Digite o ID do produto: ");
                        let novoPreco = read.questionFloat("Digite o novo preço do produto: ");
                        produtos.atualizarPreco(id, novoPreco);
                        keyPress();
                        break;
                  case 9:
                        console.log("\n\nVerificar disponibilidade em estoque\n\n");
                        id = read.questionInt("Digite o ID do produto: ");
                        let quantidadeVerificar = read.questionInt("Digite a quantidade a ser verificada: ");
                        let disponivel = produtos.verificarEstoque(id, quantidadeVerificar);
                        if(disponivel){
                              console.log(`\nO produto ID: ${id} possui estoque suficiente!`);
                        } else{
                              console.log(`\nO produto ID: ${id} não possui estoque suficiente!`);
                        }
                        keyPress();
                        break;
                  case 0:
                        console.log("Encerrando o programa...");
                        process.exit();
                  default:
                        console.log("\nOpção Inválida!\n");
                        keyPress();
                        break;
            };
      };
};
main();