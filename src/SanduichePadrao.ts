import { ISanduiche } from "./ISanduiche";

export class SanduichePadrao implements ISanduiche {

    public ingredientes = "";
    public preco = 0;

    getIngredientes(): string {
        return this.ingredientes;
    }

    getPreco(): number {
        return this.preco;
    }

}