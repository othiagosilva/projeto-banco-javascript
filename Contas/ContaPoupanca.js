import { Conta } from './Conta.js';

export class ContaPoupanca extends Conta{
	constructor (titular, agencia) {
		super(titular,agencia);
	}

	transferir(valor, conta) {
		throw new Error ('Não é possível realizar transferência de conta Poupança.');
	}
}