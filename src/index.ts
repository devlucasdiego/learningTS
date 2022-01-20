// string, boolean, number ...
let x: number = 10;
x = 12;
console.log(x);

// inferencia  x annotation
let y = 12; // annotation
let z: number = 12; // inferencia

// tipos basicos
let primeiroNome: string = "Lucas";
let idade: number = 20;
const isAdmin: boolean = true;

// String != string
console.log(typeof primeiroNome);
primeiroNome = "Diego";
console.log(primeiroNome);

// object
const meusNumeros: number[] = [1, 2, 3];
console.log(meusNumeros);
console.log(meusNumeros.length); // quantidade de elementos armazenados no array
console.log(primeiroNome.toLocaleUpperCase()); // CAPS LOCK
meusNumeros.push(5); // Adicionar elemento no array

// tuplas
let minhaTupla: [number, string, string[]];
minhaTupla = [5, "teste", ["a", "b"]];

// object literals -> {prop: value}
const usuario: { nome: string; idade: number } = {
  nome: "lucas",
  idade: 20,
};
console.log(usuario);

// any
let a: any = 0;
a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10";
id = 200;

// type alias
type meuTipoId = number | string;
const IdUsuario: meuTipoId = 10;
const IdProduto: meuTipoId = "00001";

// enum
// tamanho de roupas
enum tamanho {
  p = "Pequeno",
  M = "Medio",
  G = "Grande",
}

const camisa = {
  nome: "Camisa gola V",
  tamanho: tamanho.G,
};

console.log(camisa);

// literal types
let teste: "autenticado" | null;
teste = "autenticado";
teste = null;

// funcoes
function soma(a: number, b: number) {
  return a + b;
}
console.log(soma(10, 10));

function digaOlaPara(nome: string): string {
  return `Ola ${nome}`;
}
console.log(digaOlaPara("Lucas"));

function logger(msg: string): void {
  console.log(msg);
}
logger("TESTE!");

function saudacao(nome: string, saudacao?: string): void {
  if (saudacao) {
    console.log(`Olá ${saudacao} ${nome}`);
    return;
  }
  console.log(`Ola ${nome}`);
}
saudacao("Lucas");
saudacao("Lucas", "Senhor");

// interfaces
interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}

function multiplyNumbers(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
  n1: 10,
  n2: 12,
};

console.log(multiplyNumbers(someNumbers));

// narrowing // checagem de tipos
function facaAlgumaCoisa(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O numero é ${info}`);
    return;
  }
  console.log("Nao foi passado um numero");
}

// generics
function showArraysItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

// classes
class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }

  showUserName() {
    console.log(
      `O nome do usuário é: ${this.name}, Tipo ${this.role}, Status ${this.isApproved}`
    );
  }
}

const lucas = new User("Lucas", "Dev", true);

lucas.showUserName();

// interfaces em classes
interface IVeiculo {
  marca: string;
  showMarca(): void;
}

class Carro implements IVeiculo {
  marca;
  rodas;

  constructor(marca: string, rodas: number) {
    this.marca = marca;
    this.rodas = rodas;
  }

  showMarca(): void {
    console.log(`A marca do carro é: ${this.marca}`);
  }
}

const celta = new Carro("Chevrolet", 4);
celta.showMarca();

// heranca
class SuperCarro extends Carro {
  motor;

  constructor(marca: string, rodas: number, motor: number) {
    super(marca, rodas);
    this.motor = motor;
  }
}
const m3 = new SuperCarro("BMW", 4, 3.0);
m3.showMarca();
