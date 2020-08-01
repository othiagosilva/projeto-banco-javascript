export class Conta {
	constructor(nome, agencia) {
		this._nome = nome; 
		this._agencia = agencia; 
		this._saldo = 0; 
	}

	sacar(valor) {
		if (valor > this._saldo || valor < 0) throw new Error('Saldo Insuficiente.');

		this._saldo -= valor;
	}

	depositar(valor) {
		if (valor < 0) throw new Error('Não é possível depositar quantias negativas');
		this._saldo += valor;
	}

	transferir(valor,conta) {
		this._saldo -= valor;
		conta.depositar(valor);
	}

	set saldo(novoValor) {
		if (novoValor instanceof Conta) throw new Error('Você não pode alterar isso');
	}

	get saldo() {
		return this._saldo;
	}
}