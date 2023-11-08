import { ISanduiche } from "./ISanduiche";

export class SanduicheDecorator implements ISanduiche {

    constructor (public sanduiche: ISanduiche){}

    getIngredientes(): string {
        return this.sanduiche.getIngredientes();
    }

    getPreco(): number {
        return this.sanduiche.getPreco();
    }

}

