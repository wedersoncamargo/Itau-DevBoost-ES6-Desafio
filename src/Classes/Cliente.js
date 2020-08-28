
export default class Cliente {

    constructor({clienteID, clienteNome, clienteEmail, clienteCPF}) {
        this.id = clienteID
        this.nome = clienteNome
        this.email = clienteEmail
        this.cpf = clienteCPF
    }
    info() { 
        const cliente = {
            nome: this.nome,
            id: this.id,
            email: this.email,
            cpf: this.cpf
        }
        return cliente
    }
}