import { ISanduiche } from "./ISanduiche";
import { SanduicheDecorator } from "./SanduicheDecorator";

export class FrangoAssado extends SanduicheDecorator {
    constructor(public sanduiche: ISanduiche){
        super(sanduiche)
    }

    getIngredientes(): string {
        return this.sanduiche.getIngredientes() + 'Frango Assado:';
    }

    getPreco(): number{
        return this.sanduiche.getPreco() + 4.5;
    }
}