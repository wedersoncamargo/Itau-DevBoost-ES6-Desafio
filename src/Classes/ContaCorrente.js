import Conta from './Conta'

export default class ContaCorrente extends Conta {
    constructor(conta) {
        super(conta, "Conta Corrente")
    }

    movimentacaoConta() {

        let content = "";
        this.conta.movimentacao.map(item => {
            let icon = "+"
            if (item.action == "remove") {
                icon = "-"
            }
            content += `*** ${item.operacao} ${this.currencyFormat(item.custo)} (${icon}) \n`
        })
        return content

    }

    getMovimentacao() {
        return this.conta.movimentacao;
    }


}