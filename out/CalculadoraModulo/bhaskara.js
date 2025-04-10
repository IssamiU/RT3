"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bhaskara {
    static calcularBhaskara(numero1, numero2, numero3) {
        let delta = numero2 * numero2 - 4 * numero1 * numero3;
        if (delta < 0) {
            console.log("A Equação não possui raízes reais!");
        }
        let raizDelta = Math.sqrt(delta);
        let x1 = (-numero2 + raizDelta) / (2 * numero1);
        let x2 = (-numero2 - raizDelta) / (2 * numero1);
        return [x1, x2];
    }
}
exports.default = Bhaskara;
