import express, { json } from "express";
import { ISanduiche } from "./src/ISanduiche";
import { SanduicheDecorator } from "./src/SanduicheDecorator";
import { SanduichePadrao } from "./src/SanduichePadrao";
import { FrangoAssado } from "./src/FrangoAssado";
import { PepperoniAdic } from "./src/PepperoniAdic";
import { qjMussarelaAdic } from "./src/qjMussarela";


const sanduichePadrao: ISanduiche = new SanduichePadrao();
const sanduicheFrango: ISanduiche = new FrangoAssado(sanduichePadrao);
const sandFrangoPepperoni: ISanduiche = new PepperoniAdic(sanduicheFrango);
const sandFrangoPepQj: ISanduiche = new qjMussarelaAdic(sandFrangoPepperoni);
/*console.log(sanduichePadrao.getIngredientes(), sanduichePadrao.getPreco());
console.log(sanduicheFrango.getIngredientes(), sanduicheFrango.getPreco());
console.log(sandFrangoPepperoni.getIngredientes(), sandFrangoPepperoni.getPreco());
console.log(sandFrangoPepQj.getIngredientes(), sandFrangoPepQj.getPreco());*/

console.log(`O sanduíche de frango assado + pepperoni + queijo mussarela ralado custa ${sandFrangoPepQj.getPreco()}`);
