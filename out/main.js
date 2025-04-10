"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const soma_1 = __importDefault(require("./src/CalculadoraModulo/soma"));
const subtracao_1 = __importDefault(require("./src/CalculadoraModulo/subtracao"));
const multiplicacao_1 = __importDefault(require("./src/CalculadoraModulo/multiplicacao"));
const divisao_1 = __importDefault(require("./src/CalculadoraModulo/divisao"));
console.log(`\nCalculadora Multifunções.\n`);
console.log(`Soma: 5 + 2 = ${new soma_1.default().calcular(5, 2)}`);
console.log(`Subtrair: 10 - 2 = ${new subtracao_1.default().calcular(10, 2)}`);
console.log(`Multiplicar: 2 * 12 = ${new multiplicacao_1.default().calcular(2, 12)}`);
console.log(`Dividir: 20 / 2 = ${new divisao_1.default().calcular(20, 2)}`);
