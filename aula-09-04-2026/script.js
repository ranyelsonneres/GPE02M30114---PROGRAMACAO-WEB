//objetos
//criar objetos
const pessoa = {
    nome: "Fulano",
    idade: 10
};

console.log(pessoa);

const pessoa2 = {};
pessoa2.nome = "Ciclano";
pessoa2.email = "ciclano@gmail.com";
console.log(pessoa2);

const carro = new Object();
carro.marca = "Fiat";
carro.ano = "2026";
console.log(carro);

carro.marca = "VW";
carro.ano = "2025";
console.log(carro);

//criando com o construtor
function Carro2(marca, ano){
    this.marca = marca;
    this.ano = ano;
};

//criar instâncias do objeto
const c1 = new Carro2("Fiat", "2020");
const c2 = new Carro2("Renault", "2025");
console.log(c1);
console.log(c2.marca);

//usando uma classe
class Animal{
    constructor(tipo, nome){ //construtor
        this.tipo = tipo;
        this.nome = nome;
    };

    //métodos
    emitirSom(){
        return `${this.nome} faz um som`;
    };
};
const gato = new Animal("Felino", "Frajola");
const gato2 = new Animal("Felino", "Miau");
console.log(gato.emitirSom());

//modificadores de acesso
class ContaBancaria {
    #saldo = 0; //transformar propriedade em privada utilizamos #
    
    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    };

    getSaldo(){
        return this.#saldo;
    };
};

const conta = new ContaBancaria(50);
console.log(conta.getSaldo());
//console.log(conta.#saldo); não é possível o acesso, pois a propriedade é privada

//Arrays
let itens = [];// array
let itens2 = {}; //objeto

itens[0] = "uva";
itens[1] = "limão";

console.log(itens);
console.log(itens[1]);
itens.push("pêra"); //adicionar item no final
itens.push("mamão");
itens.unshift("maçã"); //adicionar o item no inicio
itens.splice(3,0,"laranja"); //adicionar em uma posição específica
console.log(itens);

//remover
itens.pop(); //remove a ultima posição
itens.shift(); //remove a primeira posição
itens.splice(1,1); //remover em uma posição específica
console.log(itens);


let numeros = [1, 3, 4, 2, 10];

