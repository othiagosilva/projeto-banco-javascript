import { Conta } from './Conta.js';

export class ContaCorrente extends Conta{
	constructor (titular, agencia) {
		super(titular,agencia);
	}
}