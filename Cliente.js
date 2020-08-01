export class Cliente {
	constructor(nome, cpf) {
		this._titular = nome;
		this._cpf = cpf;
	}

	get nome() {
		return this._titular;
	}

	set cpf(novoValor) {
		if(novoValor instanceof ContaCorrente) this._cpf = cpf;
	}

	get cpf() {
		return this._cpf;
	}
}