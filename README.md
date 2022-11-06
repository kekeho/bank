# hardcore-bank

貯金を頑張っていきたいという機運があるので, 僕にちゃんと動機づけをしてくれる貯金箱を錬成する.


# 使用したtech stacks
![html-css-logo](https://user-images.githubusercontent.com/89442945/200168625-51bbcf6d-6b8d-4527-bfd8-8c74e2462b40.jpeg)
![images](https://user-images.githubusercontent.com/89442945/200168205-d05e661f-d199-4851-9ddd-60f404e3b7e2.png)
![Solidity-thumbnail](https://user-images.githubusercontent.com/89442945/200168555-3e16ff19-18cb-4bee-b24d-8e7db0d84fbf.png)
![Eth2 0-1](https://user-images.githubusercontent.com/89442945/200169380-58c30b50-fccd-4d9e-a78d-2debe69fbd28.png)


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
