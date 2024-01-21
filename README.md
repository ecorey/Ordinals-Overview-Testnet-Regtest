
----- START TESTNET ------
1) .\bitcoind in -testnet using the d drive

    .\bitcoind -testnet -datadir="D:\BitcoinData" -txindex




2) check with .\bitcoin-cli that testnet is synced compare block numbet to [bitcoin testnet](https://mempool.space/testnet) 

    .\bitcoin-cli -testnet -datadir="D:\BitcoinData" getblockchaininfo




3) start the ord server with the testnet

    ord --testnet --bitcoin-data-dir="D:\BitcoinData" --cookie-file="D:\BitcoinData\testnet3\.cookie" server




4) check block count

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" getblockcount




5) open testnet gui

    ./bitcoin-qt -testnet




    STOP TESTNET

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

