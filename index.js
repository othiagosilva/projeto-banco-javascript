import {Cliente} from './Cliente.js';
import {Conta} from './Contas/Conta.js';
import {ContaCorrente} from './Contas/ContaCorrente.js';
import {ContaPoupanca} from './Contas/ContaPoupanca.js';

let cliente1 = new Cliente('Thiago', 12345678900);
let cliente2 = new Cliente('Richard', 12365478912);
let contaDoCliente1 = new ContaCorrente(cliente1.nome, 101);
let contaDoCliente2 = new ContaCorrente(cliente2.nome, 101);

console.log(contaDoCliente1);
console.log(contaDoCliente2);
contaDoCliente1.depositar(100);
// contaDoCliente1.sacar(50);
contaDoCliente1.transferir(50, contaDoCliente2);
console.log('');
console.log(contaDoCliente1);
console.log(contaDoCliente2);
