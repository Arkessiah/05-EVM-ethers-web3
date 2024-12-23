const { Web3 } = require('web3');

const web3 = new Web3('https://sepolia.infura.io/v3/....................'); // Aqui debes poner tu URL de Infura u otro servicor RPC de la red donde despliegues el contrato

async function obtenerInformacion() {
    try {
        // Obtener el ID de la red
        const networkId = await web3.eth.net.getId();
        console.log("ID de la red:", networkId);

        // Dirección a consultar
        const direccion = '0x.........'; // Aqui debes poner la dirección de tu contrato o de tu wallet que quieras consultar
        const balanceWei = await web3.eth.getBalance(direccion);
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
        console.log("Balance en ETH:", balanceEth);

        // Obtener el último bloque
        const ultimoBloque = await web3.eth.getBlockNumber();
        console.log("Último bloque:", ultimoBloque);
    } catch (error) {
        console.error("Error:", error);
    }
}

obtenerInformacion();