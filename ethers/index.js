const { ethers } = require("ethers");

const sepoliaRPC = "https://ethereum-sepolia-rpc.publicnode.com";
const provider = new ethers.JsonRpcProvider(sepoliaRPC);

const contractABI = [
  {
    "inputs": [{"internalType": "uint256","name": "suministroInicial","type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true,"internalType": "address","name": "from","type": "address"},
      {"indexed": true,"internalType": "address","name": "to","type": "address"},
      {"indexed": false,"internalType": "uint256","name": "","type": "uint256"}
    ],
    "name": "Transfer",
    "type": "event"
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
    "name": "decimales",
    "outputs": [{"internalType": "uint8","name": "","type": "uint8"}],
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
  },
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

const contractAddress = "0x37Ce632427B925dB265fE4D5FDB3B81A237b7a17";  // esta es la direccion de mi contrato en la red de Sepolia, aqui deberia ir la vuestra
const contract = new ethers.Contract(contractAddress, contractABI, provider);

async function obtenerInformacionToken() {
    try {
        const nombre = await contract.nombre();
        const simbolo = await contract.simbolo();
        const decimales = await contract.decimales();
        const totalSupply = await contract.totalSupply();
        
        console.log("Nombre del Token:", nombre);
        console.log("Símbolo:", simbolo);
        console.log("Decimales:", decimales);
        console.log("Supply Total:", totalSupply.toString());

    } catch (error) {
        console.error("Error al obtener información:", error);
    }
}

// Función para consultar el balance de una dirección
async function consultarBalance(direccion) {
    try {
        const balance = await contract.balanceOf(direccion);
        console.log("Balance de", direccion, ":", balance.toString());
    } catch (error) {
        console.error("Error al consultar balance:", error);
    }
}

// Ejecutar las funciones
obtenerInformacionToken();

consultarBalance("0x.............."); // Aquí pon la dirección de la wallet que quieras consultar