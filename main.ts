import * as readline from 'readline';
import Mensagens from './src/CalculadoraModulo/mensagens';
import Soma from "./src/CalculadoraModulo/soma";
import Subtracao from "./src/CalculadoraModulo/subtracao";
import Multiplicacao from "./src/CalculadoraModulo/multiplicacao";
import Divisao from "./src/CalculadoraModulo/divisao";
import Potenciacao from "./src/CalculadoraModulo/potenciacao";
import Radiciacao from "./src/CalculadoraModulo/radiciacao";
import Bhaskara from "./src/CalculadoraModulo/bhaskara";



let mensagens = new Mensagens()
let calculo
let leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let iniciar = () => {
  leitor.question(`Escolha a operação desejada:\n`, (operacao) => {
    if (operacao === 'Bhaskara') {
        leitor.question(`Digite os coeficientes a, b e c separados por espaço: `, (valor) => {
            let [numero1, numero2, numero3] = valor.split(' ').map(Number)
            let [x1, x2] = Bhaskara.calcularBhaskara(numero1, numero2, numero3)
            console.log(`Soluções encontradas: x1 = ${x1} e x2 = ${x2}.`)
            iniciar()
        })
    } else if (operacao === 'Sair') {
        console.log(`Programa finalizado. Até breve!`)
        leitor.close()
    } else {
        leitor.question(`Informe os dois números para o cálculo, separados por espaço: `, (valor) => {
            let [numero1, numero2] = valor.split(' ').map(Number)
            
            switch (operacao) {
              case 'Somar':
                  calculo = new Soma()
                  console.log(`Resultado da soma: ${calculo.calcular(numero1, numero2)}\n`)
                  iniciar()
                  break;
              case 'Subtrair':
                  calculo = new Subtracao()
                  console.log(`Resultado da subtração: ${calculo.calcular(numero1, numero2)}\n`)
                  iniciar()
                  break;
              case 'Multiplicar':
                  calculo = new Multiplicacao()
                  console.log(`Resultado da multiplicação: ${calculo.calcular(numero1, numero2)}\n`)
                  iniciar()
                  break;
              case 'Dividir':
                  calculo = new Divisao()
                  console.log(`Resultado da divisão: ${calculo.calcular(numero1, numero2)}\n`)
                  iniciar()
                  break;
              case 'Potenciação':
                  calculo = new Potenciacao()
                  console.log(`Resultado da potenciação: ${calculo.calcular(numero1, numero2)}\n`)
                  iniciar()
                  break;
              case 'Radiciação':
                  calculo = new Radiciacao()
                  console.log(`Resultado da radiciação: ${calculo.calcular(numero1, numero2)}\n`)
                  iniciar()
                  break;
              default:
                  console.log(`Operação inválida. Por favor, tente novamente.`)
                  iniciar()
          }
      })
  }
  });
}

mensagens.boasVindas()
mensagens.listarOpcoes()
iniciar()
