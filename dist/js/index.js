"use strict";
let x = 10;
x = 12;
console.log(x);
let y = 12;
let z = 12;
let primeiroNome = "Lucas";
let idade = 20;
const isAdmin = true;
console.log(typeof primeiroNome);
primeiroNome = "Diego";
console.log(primeiroNome);
const meusNumeros = [1, 2, 3];
console.log(meusNumeros);
console.log(meusNumeros.length);
console.log(primeiroNome.toLocaleUpperCase());
meusNumeros.push(5);
let minhaTupla;
minhaTupla = [5, "teste", ["a", "b"]];
const usuario = {
    nome: "lucas",
    idade: 20,
};
console.log(usuario);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
const IdUsuario = 10;
const IdProduto = "00001";
var tamanho;
(function (tamanho) {
    tamanho["p"] = "Pequeno";
    tamanho["M"] = "Medio";
    tamanho["G"] = "Grande";
})(tamanho || (tamanho = {}));
const camisa = {
    nome: "Camisa gola V",
    tamanho: tamanho.G,
};
console.log(camisa);
let teste;
teste = "autenticado";
teste = null;
function soma(a, b) {
    return a + b;
}
console.log(soma(10, 10));
function digaOlaPara(nome) {
    return `Ola ${nome}`;
}
console.log(digaOlaPara("Lucas"));
function logger(msg) {
    console.log(msg);
}
logger("TESTE!");
function saudacao(nome, saudacao) {
    if (saudacao) {
        console.log(`Olá ${saudacao} ${nome}`);
        return;
    }
    console.log(`Ola ${nome}`);
}
saudacao("Lucas");
saudacao("Lucas", "Senhor");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 10,
    n2: 12,
};
console.log(multiplyNumbers(someNumbers));
function facaAlgumaCoisa(info) {
    if (typeof info === "number") {
        console.log(`O numero é ${info}`);
        return;
    }
    console.log("Nao foi passado um numero");
}
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}, Tipo ${this.role}, Status ${this.isApproved}`);
    }
}
const lucas = new User("Lucas", "Dev", true);
lucas.showUserName();
class Carro {
    marca;
    rodas;
    constructor(marca, rodas) {
        this.marca = marca;
        this.rodas = rodas;
    }
    showMarca() {
        console.log(`A marca do carro é: ${this.marca}`);
    }
}
const celta = new Carro("Chevrolet", 4);
celta.showMarca();
class SuperCarro extends Carro {
    motor;
    constructor(marca, rodas, motor) {
        super(marca, rodas);
        this.motor = motor;
    }
}
const m3 = new SuperCarro("BMW", 4, 3.0);
m3.showMarca();
