# hardcore-bank

貯金を頑張っていきたいという機運があるので, 僕にちゃんと動機づけをしてくれる貯金箱を錬成する.


# 使用したtech stacks

![images](https://user-images.githubusercontent.com/89442945/200168205-d05e661f-d199-4851-9ddd-60f404e3b7e2.png)
![Solidity-thumbnail](https://user-images.githubusercontent.com/89442945/200168555-3e16ff19-18cb-4bee-b24d-8e7db0d84fbf.png)




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
