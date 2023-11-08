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