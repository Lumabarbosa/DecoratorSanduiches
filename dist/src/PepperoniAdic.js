"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PepperoniAdic = void 0;
const SanduicheDecorator_1 = require("./SanduicheDecorator");
class PepperoniAdic extends SanduicheDecorator_1.SanduicheDecorator {
    constructor(sanduiche) {
        super(sanduiche);
        this.sanduiche = sanduiche;
    }
    getIngredientes() {
        return this.sanduiche.getIngredientes() + ' Pepperoni: ';
    }
    getPreco() {
        return this.sanduiche.getPreco() + 0.99;
    }
}
exports.PepperoniAdic = PepperoniAdic;
