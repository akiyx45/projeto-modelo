const financeiro = require('./financeiro')
const clientes = require('./clientes')

function imprimirCupom(cliente, valorFinal) {
    console.log("LOJA MODA SENAC");
    console.log("Cliente: ", cliente);
    console.log("Total a pagar: ", valorFinal);
}

const valorFinal = financeiro.calcularTotalComDesconto(200, 10)

const cliente1 = listarClientes.criarCliente(
    "Vinícius Esteves",
    "vinithebest002@gmail.com",
    "VIP",
)
listarClientes.cadastrarCliente(clientes)

imprimirCupom(cliente1.nome, valorFinal);