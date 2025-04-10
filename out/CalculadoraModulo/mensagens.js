"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mensagens {
    constructor() {
        this.boasVindas = () => {
            console.log(`\nCalculadora Multifunções.\n`);
        };
        this.listarOpcoes = () => {
            console.log(`Escolha uma operação disponível:`);
            console.log(`Somar`);
            console.log(`Subtrair`);
            console.log(`Multiplicar`);
            console.log(`Dividir`);
            console.log(`Potenciação`);
            console.log(`Radiciação`);
            console.log(`Bhaskara (Equações Quadráticas)`);
            console.log(`\nDigite "Sair" para encerrar o programa.\n`);
        };
    }
}
exports.default = Mensagens;
