"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SanduichePadrao_1 = require("./src/SanduichePadrao");
const FrangoAssado_1 = require("./src/FrangoAssado");
const PepperoniAdic_1 = require("./src/PepperoniAdic");
const qjMussarela_1 = require("./src/qjMussarela");
const sanduichePadrao = new SanduichePadrao_1.SanduichePadrao();
const sanduicheFrango = new FrangoAssado_1.FrangoAssado(sanduichePadrao);
const sandFrangoPepperoni = new PepperoniAdic_1.PepperoniAdic(sanduicheFrango);
const sandFrangoPepQj = new qjMussarela_1.qjMussarelaAdic(sandFrangoPepperoni);
/*console.log(sanduichePadrao.getIngredientes(), sanduichePadrao.getPreco());
console.log(sanduicheFrango.getIngredientes(), sanduicheFrango.getPreco());
console.log(sandFrangoPepperoni.getIngredientes(), sandFrangoPepperoni.getPreco());
console.log(sandFrangoPepQj.getIngredientes(), sandFrangoPepQj.getPreco());*/
console.log(`O sanduíche de frango assado + pepperoni + queijo mussarela ralado custa ${sandFrangoPepQj.getPreco()}`);