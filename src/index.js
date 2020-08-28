import clientes from './api'
import Cliente from './Classes/Cliente'
import ContaCorrente from './Classes/ContaCorrente'
import ContaPoupanca from './Classes/ContaPoupanca'
import View from './Classes/View'

import DOMInjector from './dom/DOMInjector';


const listaClientes = () => {
    clientes.map(function(data){
        const {contaPoupanca, contaCorrente, ...perfil} = data
        const cliente = new Cliente(perfil)
        const conta_corrente = new ContaCorrente(contaCorrente);
        const conta_poupanca = new ContaPoupanca(contaPoupanca)
        
        display(cliente.id)
        display(cliente.nome)
        display(cliente.cpf)
        display(cliente.email)
        display(conta_poupanca.mostraSaldo())
        display(conta_corrente.mostraSaldo())
        display(conta_corrente.movimentacaoConta())
        display("######")

        const renderView = {
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            clienteId: cliente.id,
            saldoPoupanca: conta_poupanca.mostraSaldo(),
            saldoContaCorrente: conta_corrente.mostraSaldo(),
            contaCorrenteMovimentacao: conta_corrente.getMovimentacao()
        }

        const domInjector = new DOMInjector;
        const view = new View(renderView)
        domInjector.inject(view.render());
    
    })
} 

const display = (content) => {
    if(content){
        console.log(content);
    }
    
}

listaClientes();