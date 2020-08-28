export default class View {

    constructor(renderView) {
        this.content = renderView
    }

    currencyFormat(valor) {
        return new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(valor)
    }
    renderMovimentacao() {
        let lista = "<ul>"
        this.content.contaCorrenteMovimentacao.map(item => {
            let icon = "+"
            if (item.action == "remove") {
                icon = "-"
            }
            lista += `<li>${item.operacao} ${this.currencyFormat(item.custo)} (${icon}) </li>`
        })
        lista += '</ul>'
        return lista
    }

    render() {
        return `
        <div>
            <h3>${this.content.nome}</h3>
            <p>CPF: ${this.content.cpf}<br /> Email: ${this.content.email}</p>
            <p>${this.content.saldoPoupanca}</p>
            <p>${this.content.saldoContaCorrente}</p>
            <strong>Lançamentos em conta</strong>
            <p>${this.renderMovimentacao()}
        </di>
        `
    }


}