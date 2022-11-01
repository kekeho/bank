# hardcore-bank

貯金を頑張っていきたいという機運があるので, 僕にちゃんと動機づけをしてくれる貯金箱を錬成する.

## status

他ブランチで開発中

## Contract

### build

```sh
cd contract
pipenv install
pipenv shell
brownie pm install OpenZeppelin/openzeppelin-contracts@4.4.1
brownie pm install kekeho/BokkyPooBahsDateTimeLibrary@1.02
```

### deploy

```sh
cd ./contract
brownie run deploy
```

## Front

### build

```sh
cd front
elm make src/Main.elm --output dist/js/elm.js --optimize
```

### run

```
# test server
cd front/dist
python3 -m http.server --bind 127.0.0.1
```


## testnet

`0xA1174cA95E9B7cbA9c4cDD89f5Af2d077b18761d` on Ropsten
