export default  class Conta {

    constructor(conta, tipo) {
        this.conta = conta
        this.tipo = tipo
        this.saldo = this.conta.id? this.conta.saldo: this.conta
    } 
    
    getContaId() {
        if (this.conta.id) {
            return this.conta.id
        }
        else {
            return null
        }
    }

    mostraSaldo() {
        return `Saldo em Conta ${this.tipo}:  ${this.currencyFormat(this.saldo)}`;
    }
    currencyFormat(valor) {
        return new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(valor)
    }
}
