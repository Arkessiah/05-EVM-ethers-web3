const { Web3 } = require('web3');

const web3 = new Web3('https://sepolia.infura.io/v3/xxxxxxxxxxxxxxxxxxx'); // tambien puedes usar tu nodo local o usar Alchemy  o cualquier otro servicio RPC

const contractABI = [
    {
        "inputs": [{"internalType": "uint256","name": "suministroInicial","type": "uint256"}],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [{"internalType": "address","name": "","type": "address"}],
        "name": "balanceOf",
        "outputs": [{"internalType": "uint256","name": "","type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nombre",
        "outputs": [{"internalType": "string","name": "","type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "simbolo",
        "outputs": [{"internalType": "string","name": "","type": "string"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{"internalType": "uint256","name": "","type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }
];

const contractAddress = "0x37Ce632427B925dB265fE4D5FDB3B81A237b7a17";   // este es de mi contrato desplegado en la red de Sepolia, pero puedes poner el tuyo
const contrato = new web3.eth.Contract(contractABI, contractAddress);

async function consultarContrato() {
    try {
        const nombre = await contrato.methods.nombre().call();
        const simbolo = await contrato.methods.simbolo().call();
        const totalSupply = await contrato.methods.totalSupply().call();
        
        console.log("Nombre del Token:", nombre);
        console.log("Símbolo:", simbolo);
        console.log("Supply Total:", totalSupply);

        // Consultar balance de una dirección específica
        const direccion = "0x..........................."; // Aquí debes poner la dirección de tu contrato o de tu wallet que quieras consultar
        const balance = await contrato.methods.balanceOf(direccion).call();
        console.log("Balance de", direccion, ":", balance);
    } catch (error) {
        console.error("Error:", error);
    }
}

consultarContrato();