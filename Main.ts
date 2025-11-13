import read from "readline-sync";

let opcao:number;

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

            if(opcao === 0){
                  console.log("Encerrando o programa...");
                  process.exit();
            };

            switch(opcao){
                  case 1:
                        break;
                  case 2:
                        break;
                  case 3:
                        break;
                  case 4:
                        break;
                  case 5:
                        break;
                  case 6:
                        break;
                  case 7:
                        break;
                  case 8:
                        break;
                  case 9:
                        break;
                  case 0:
                        break;
                  default:
                        break;
            };
      };
};