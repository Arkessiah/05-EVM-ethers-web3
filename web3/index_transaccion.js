const { Web3 } = require('web3');

const web3 = new Web3('https://sepolia.infura.io/v3/xxxxxxxxxxxxxxxx');


const privateKey = "0x..........................."; // Aquí debes poner tu clave privada de tu wallet recuerda que debes añadirle a esa clave privada el prefijo 0x
const account = web3.eth.accounts.wallet.add(privateKey);

const contractABI = [
    {
        "inputs": [
            {"internalType": "address","name": "to","type": "address"},
            {"internalType": "uint256","name": "cantidad","type": "uint256"}
        ],
        "name": "transfer",
        "outputs": [{"internalType": "bool","name": "","type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const contractAddress = "0x................. "; // Aquí debes poner la dirección de tu contrato
const contrato = new web3.eth.Contract(contractABI, contractAddress);

async function realizarTransferencia() {
    try {
        const destinatario = "0x...................."; // Ajusta la dirección del destinatario
        const cantidad = "100"; // Ajusta la cantidad según necesites

        const tx = await contrato.methods.transfer(destinatario, cantidad).send({
            from: account[0].address,
            gas: 300000
        });

        console.log("Transacción completada:", tx);
    } catch (error) {
        console.error("Error en la transacción:", error);
    }
}

realizarTransferencia();