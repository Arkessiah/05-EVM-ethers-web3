const { Web3 } = require('web3');

// Conexión al nodo Ethereum a través de Infura
const web3 = new Web3('https://sepolia.infura.io/v3/xxxxxxxxxxxxx'); // Aquí debes poner tu URL de Infura u otro servicio RPC de la red donde despliegues el contrato

// Función asíncrona para obtener el número del último bloque
async function getLatestBlockNumber() {
    try {
        const latestBlockNumber = await web3.eth.getBlockNumber();
        console.log("El número del último bloque es:", latestBlockNumber);
    } catch (error) {
        console.error("Error al obtener el bloque:", error);
    }
}

// Ejecutar la función
getLatestBlockNumber();