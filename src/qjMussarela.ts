import { ISanduiche } from "./ISanduiche";
import { SanduicheDecorator } from "./SanduicheDecorator";

export class qjMussarelaAdic extends SanduicheDecorator {
    constructor(public sanduiche: ISanduiche) {
        super(sanduiche);
    }
    getIngredientes(): string {
        return this.sanduiche.getIngredientes() + ' Queijo Mussarela Ralado: ';
    }

    getPreco(): number{
        return this.sanduiche.getPreco() + 2.00;
    }
}