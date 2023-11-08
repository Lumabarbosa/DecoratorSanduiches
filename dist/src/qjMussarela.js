"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qjMussarelaAdic = void 0;
const SanduicheDecorator_1 = require("./SanduicheDecorator");
class qjMussarelaAdic extends SanduicheDecorator_1.SanduicheDecorator {
    constructor(sanduiche) {
        super(sanduiche);
        this.sanduiche = sanduiche;
    }
    getIngredientes() {
        return this.sanduiche.getIngredientes() + ' Queijo Mussarela Ralado: ';
    }
    getPreco() {
        return this.sanduiche.getPreco() + 2.00;
    }
}
exports.qjMussarelaAdic = qjMussarelaAdic;
