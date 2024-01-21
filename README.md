In Bitcoin Core folder run for regtest:
// creates a test wallet

or for bitcoind
.\bitcoind -regtest -txindex -listen=0

 .\bitcoin-cli -regtest getnetworkinfo

 ord -r server

 ord --regtest wallet create

run html in browser

in console eg address to mine coins for use on testnet:

generatetoaddress 101 'bcrt1qyk8dqzfnxhma8xjecme2lk27f8zrcqh0j57gn7'

// 34:oo
// https://www.youtube.com/watch?v=C9wf14vlLOc&t=2296s


---

---




----- START TESTNET ------
1) .\bitcoind in -testnet using the d drive

    .\bitcoind -testnet -datadir="D:\BitcoinData"

2) check with .\bitcoin-cli that testnet is synced

    .\bitcoin-cli -testnet -datadir="D:\BitcoinData" getblockchaininfo

3) start the ord server with the testnet

    ord --testnet --data-dir="D:\BitcoinData" --cookie-file="D:\BitcoinData\testnet3\.cookie" server

