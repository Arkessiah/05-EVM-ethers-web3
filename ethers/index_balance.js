const { ethers } = require("ethers");

const sepoliaRPC = "https://ethereum-sepolia-rpc.publicnode.com";
const provider = new ethers.JsonRpcProvider(sepoliaRPC);

const contractABI = [
  {
    "inputs": [],
    "name": "nombre",
    "outputs": [{"type": "string"}],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{"type": "address"}],
    "name": "balanceOf",
    "outputs": [{"type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}
];

const contractAddress = "0x37Ce632427B925dB265fE4D5FDB3B81A237b7a17"; // Este es mi contrato desplegado en la red de Sepolia, aqui deberia ir el vuestro
const contract = new ethers.Contract(contractAddress, contractABI, provider);

async function obtenerInformacionToken() {
    try {
        const nombre = await contract.nombre();
     
        
        console.log("Nombre del Token:", nombre);


    } catch (error) {
        console.error("Error al obtener información:", error);
    }
}

async function consultarBalance(direccion) {
    try {
        const balance = await contract.balanceOf(direccion);
        console.log("Balance de", direccion, ":", balance.toString());
    } catch (error) {
        console.error("Error al consultar balance:", error);
    }
}

// Función para consultar múltiples balances
async function consultarMultiplesBalances() {
    await obtenerInformacionToken();
    
    // Consultar balance del contrato
    await consultarBalance("0x37Ce632427B925dB265fE4D5FDB3B81A237b7a17");  // igualmente si probais con un contrato vuestro debeis poner aqui su address
    
    // Consultar balance de tu dirección (reemplaza con tu dirección)
    await consultarBalance("0x...........................");  // Esta direccion es de una wallet para comprobar el saldo en la misma
    
    // Puedes añadir más direcciones para consultar
    // await consultarBalance("OTRA_DIRECCIÓN");
}

// Ejecutar las consultas
consultarMultiplesBalances();