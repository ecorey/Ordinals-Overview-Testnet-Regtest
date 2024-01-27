const axios = require('axios');

const rpcUser = '__cookie__';
const rpcPassword = 'e8540eceb06f7e16c46c12b4ec76d794ec7bfc551ae67b90df263bbfa25434ef';
const rpcURL = 'http://127.0.0.1:18443'; 
async function getBlockchainInfo() {
    try {
        const payload = {
            jsonrpc: '1.0',
            id: 'curltest',
            method: 'getblockchaininfo',
            params: []
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        const response = await axios.post(rpcURL, payload, {
            headers: headers,
            auth: {
                username: rpcUser,
                password: rpcPassword
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

getBlockchainInfo();
