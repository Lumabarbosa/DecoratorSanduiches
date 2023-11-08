"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanduicheDecorator = void 0;
class SanduicheDecorator {
    constructor(sanduiche) {
        this.sanduiche = sanduiche;
    }
    getIngredientes() {
        return this.sanduiche.getIngredientes();
    }
    getPreco() {
        return this.sanduiche.getPreco();
    }
}
exports.SanduicheDecorator = SanduicheDecorator;
/*public preco(): number {
    let preco = 0;
    for (const [chave, valor] of this.ingredientes) {
        preco += this.ingredientes.get(chave);
    }
    return preco;
}*/
/*export abstract class SanduicheDecorator implements ISanduiche {
    sanduicheProduzido: ISanduiche;

    public constructor (sanduiche: ISanduiche){
        this.sanduicheProduzido = sanduiche;
    }

    public abstract preco(): number;
}*/ 
