
----- START TESTNET ------

1) .\bitcoind in -testnet using the d drive

    .\bitcoind -testnet -datadir="D:\BitcoinData" -txindex




2) check with .\bitcoin-cli that testnet is synced compare block number to [bitcoin testnet](https://mempool.space/testnet) 

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" getblockchaininfo





3) check block count

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" getblockcount


can check block against the [ordinals.com testnet](https://testnet.ordinals.com/blocks) 





4) OR open testnet gui  // need to close bitcoind first as it has a lock // cannot open ord like this

    
    ./bitcoin-qt -testnet -datadir="D:\BitcoinData" -wallet=ord






5) list wallets

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" listwallets





6) create taproot wallet

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" createwallet "ord" false false "" false true





7) get wallet recieve address

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" -rpcwallet="taproot_wallet1" getnewaddress "" "bech32m"

    e.g. tb1pk0vfpp7jf6cv0j926gqr2d39uy292y9l5yc904p7vcq5jthktjrscz24vf





8) list descriptors

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" listdescriptors





9) start the ord server with the testnet

    ord --testnet --bitcoin-data-dir="D:\BitcoinData" --cookie-file="D:\BitcoinData\testnet3\.cookie" server --http-port 8080 --address 127.0.0.1





10) create ord wallet

    ord --testnet --bitcoin-data-dir="D:\BitcoinData" --cookie-file="D:\BitcoinData\testnet3\.cookie" wallet create





11) create ord wallet recieve 


    ord --testnet --bitcoin-data-dir="D:\BitcoinData" --cookie-file="D:\BitcoinData\testnet3\.cookie" wallet receive






12) load wallet named "ord"

    .\bitcoin-cli -testnet -datadir="D:\BitcoinData" loadwallet "ord"





13) unload wallet named "ord"

    .\bitcoin-cli -testnet -datadir="D:\BitcoinData" unloadwallet "ord"





14) get addresses 

    .\bitcoin-cli -testnet -datadir="D:\BitcoinData" listaddressgroupings






15) get balance

   
    .\bitcoin-cli -testnet -datadir="D:\BitcoinData" getreceivedbyaddress "tb1pk0vfpp7jf6cv0j926gqr2d39uy292y9l5yc904p7vcq5jthktjrscz24vf"





16) get balance ord

    ord --testnet --bitcoin-data-dir="D:\BitcoinData" --cookie-file="D:\BitcoinData\testnet3\.cookie" wallet balance





17) inscribe a text saved in a .txt file and in an envelope

    ord --testnet --bitcoin-data-dir="D:\\BitcoinData" --cookie-file="D:\\BitcoinData\\testnet3\\.cookie" wallet inscribe --fee-rate 1000 --file "C:\\Users\\bengs\\Bitcoin_Projects\\ord\\inscribed.txt"




98) get testnet bitcoin


   USE THIS [SWAP](https://www.altquick.com/swap/)


    



99) STOP TESTNET

    .\bitcoin-cli --testnet --datadir="D:\BitcoinData" stop




**TO RUN ORD WALLET CLOSE THE ORD SERVER, IT NEEDS TO SELF INDEX**


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

