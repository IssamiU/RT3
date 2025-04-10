import Soma from "./src/CalculadoraModulo/soma";
import Subtracao from "./src/CalculadoraModulo/subtracao";
import Multiplicacao from "./src/CalculadoraModulo/multiplicacao";
import Divisao from "./src/CalculadoraModulo/divisao";


console.log(`\nCalculadora Multifunções.\n`)
console.log(`Soma: 5 + 2 = ${new Soma().calcular(5, 2)}`)
console.log(`Subtrair: 10 - 2 = ${new Subtracao().calcular(10, 2)}`)
console.log(`Multiplicar: 2 * 12 = ${new Multiplicacao().calcular(2, 12)}`)
console.log(`Dividir: 20 / 2 = ${new Divisao().calcular(20, 2)}`)