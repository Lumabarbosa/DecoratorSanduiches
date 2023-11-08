"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrangoAssado = void 0;
const SanduicheDecorator_1 = require("./SanduicheDecorator");
class FrangoAssado extends SanduicheDecorator_1.SanduicheDecorator {
    constructor(sanduiche) {
        super(sanduiche);
        this.sanduiche = sanduiche;
    }
    getIngredientes() {
        return this.sanduiche.getIngredientes() + 'Frango Assado:';
    }
    getPreco() {
        return this.sanduiche.getPreco() + 4.5;
    }
}
exports.FrangoAssado = FrangoAssado;
