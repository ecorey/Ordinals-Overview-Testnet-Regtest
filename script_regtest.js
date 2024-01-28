const axios = require('axios');

const rpcUser = '__cookie__';
const rpcPassword = '';
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
