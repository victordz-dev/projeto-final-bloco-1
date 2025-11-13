import read from "readline-sync";

let opcao:number;

export function main(){
      
      while (true) {

            console.log(`
            *****************************************************

                              ECOMMERCE - ECOTREND    
                  Sua loja de produtos ecologicamente sustentáveis!            

            *****************************************************
                       
            1 - Mostrar produtos                         
            2 - Colocar produtos no carrinho              
            3 - Buscar produto por id             
            4 - Atualizar quantidade no carrinho             
            5 - Tirar produto do carrinho  
            6 - Finalizar compra
            7 - Apagar carrinho 
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
            case 0:
                  break;
            default:
                  break;
      };
      };
};