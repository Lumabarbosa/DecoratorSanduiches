import { ISanduiche } from "./ISanduiche";
import { SanduicheDecorator } from "./SanduicheDecorator";

export class PepperoniAdic extends SanduicheDecorator {
    constructor(public sanduiche: ISanduiche) {
        super(sanduiche);
    }
    getIngredientes(): string {
        return this.sanduiche.getIngredientes() + ' Pepperoni: ';
    }

    getPreco(): number{
        return this.sanduiche.getPreco() + 0.99;
    }
}