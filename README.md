
----- START TESTNET ------

1) .\bitcoind in -testnet using the d drive

    .\bitcoind -testnet -datadir="D:\BitcoinData" -txindex




2) check with .\bitcoin-cli that testnet is synced compare block numbet to [bitcoin testnet](https://mempool.space/testnet) 

    .\bitcoin-cli -testnet -datadir="D:\BitcoinData" getblockchaininfo





3) check block count

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" getblockcount





4) OR open testnet gui  // need to close bitcoind first as it has a lock // cannot open ord like this

    
    ./bitcoin-qt -testnet -datadir="D:\BitcoinData" -wallet=ord






5) list wallets

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" listwallets





6) create taproot wallet

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" createwallet "taproot_wallet1" false false "" false true





7) get wallet recieve address

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" -rpcwallet="taproot_wallet1" getnewaddress "" "bech32m"

    e.g. tb1qt0n9j9re9cvw05ztjv60ka65ywxuj2h3r22t96





8) list descriptors

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" listdescriptors





9) start the ord server with the testnet

    ord --testnet --bitcoin-data-dir="D:\BitcoinData" --cookie-file="D:\BitcoinData\testnet3\.cookie" server --http-port 8080 --address 127.0.0.1





10) create ord wallet

    ord --testnet --bitcoin-data-dir="D:\BitcoinData" --cookie-file="D:\BitcoinData\testnet3\.cookie" wallet create



10) create ord wallet recieve 


    ord --testnet --bitcoin-data-dir="D:\BitcoinData" --cookie-file="D:\BitcoinData\testnet3\.cookie" wallet receive


1) get balance

    ord --testnet --bitcoin-data-dir="D:\BitcoinData" --cookie-file="D:\BitcoinData\testnet3\.cookie" wallet receive


1) get bitcoin




99) STOP TESTNET

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" stop








---

---

---REGTEST---

    .\bitcoind -regtest -datadir="D:\BitcoinRegtest" -txindex -listen=0


    ord --regtest --bitcoin-data-dir="D:\BitcoinRegtest" --cookie-file="D:\BitcoinRegtest\testnet3\.cookie" server


    ord --regtest --data-dir="D:\BitcoinRegtest" --cookie-file="D:\BitcoinRegtest\testnet3\.cookie" wallet create


    .\bitcoin-cli -regtest -datadir="D:\BitcoinRegtest" generatetoaddress 101 'xxxxx'


    .\bitcoin-cli --regtest --datadir="D:\BitcoinRegtest" stop
    
---

---

