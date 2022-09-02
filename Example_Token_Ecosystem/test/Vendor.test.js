const Vendor = artifacts.require("Vendor.sol");
const abiVendor = [{
    "contractName": "Vendor",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amountOfBnb",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amountOfTokens",
            "type": "uint256"
          }
        ],
        "name": "BuyTokens",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "token",
        "outputs": [
          {
            "internalType": "contract Token",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "tokensPerBnb",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "buyTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.0+commit.c7dfd78e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"buyer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amountOfBnb\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amountOfTokens\",\"type\":\"uint256\"}],\"name\":\"BuyTokens\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"buyTokens\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"internalType\":\"contract Token\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokensPerBnb\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Vendor.sol\":\"Vendor\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/Token.sol\":{\"keccak256\":\"0xbbb6f276823716983f183dd16a045fe72a9cb8666a1899c6c8d4549c8874aeed\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0a31171c7c825760773189c76a95f6d644d7ca35ebbd38adcc9539a8c47b3fad\",\"dweb:/ipfs/QmX3UpX2SRePwFr3DNFLfrrSj2KfmrZEyvRMgCnXTmt76V\"]},\"project:/contracts/Vendor.sol\":{\"keccak256\":\"0xd181aedace28b5463c1df7293a38df98098094f4c1bbba8154b0eb59479f434c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cf74190a66bd27fb4cab0deb7579b57bd3031d5bc791247ddb22e89c52794b4f\",\"dweb:/ipfs/QmNju5bgpU4oyaAAS59Akkp5bGs7u7Twz2qsrSQHcKtfjV\"]},\"project:/openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e12cbaa7378fd9b62280e4e1d164bedcb4399ce238f5f98fc0eefb7e50577981\",\"dweb:/ipfs/QmXRoFGUgfsaRkoPT5bxNMtSayKTQ8GZATLPXf69HcRA51\"]},\"project:/openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xdadd41acb749920eccf40aeaa8d291adf9751399a7343561bad13e7a8d99be0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://12af4ac016f9fdf3be5d15824f4292272aa11f6b2e0192a0f7320f5ad49bbbf0\",\"dweb:/ipfs/QmRXMpdqCgA3TYuYxBodqs5p9jGbnMW6xa2gvjppvq4TWk\"]},\"project:/openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xbbc8ac883ac3c0078ce5ad3e288fbb3ffcc8a30c3a98c0fda0114d64fc44fca2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://87a7a5d2f6f63f84598af02b8c50ca2df2631cb8ba2453e8d95fcb17e4be9824\",\"dweb:/ipfs/QmR76hqtAcRqoFj33tmNjcWTLrgNsAaakYwnKZ8zoJtKei\"]},\"project:/openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"project:/openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561001057600080fd5b50604051610dce380380610dce83398181016040528101906100329190610176565b61004e61004361009560201b60201c565b61009d60201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506101e8565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050610170816101d1565b92915050565b60006020828403121561018857600080fd5b600061019684828501610161565b91505092915050565b60006101aa826101b1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6101da8161019f565b81146101e557600080fd5b50565b610bd7806101f76000396000f3fe6080604052600436106100705760003560e01c80638da5cb5b1161004e5780638da5cb5b146100ce578063d0febe4c146100f9578063f2fde38b14610103578063fc0c546a1461012c57610070565b80633ccfd60b146100755780633ea8f9ab1461008c578063715018a6146100b7575b600080fd5b34801561008157600080fd5b5061008a610157565b005b34801561009857600080fd5b506100a16102cb565b6040516100ae9190610a47565b60405180910390f35b3480156100c357600080fd5b506100cc6102d0565b005b3480156100da57600080fd5b506100e3610358565b6040516100f09190610911565b60405180910390f35b610101610381565b005b34801561010f57600080fd5b5061012a600480360381019061012591906106d7565b6104c3565b005b34801561013857600080fd5b506101416105bb565b60405161014e919061098c565b60405180910390f35b61015f6105e1565b73ffffffffffffffffffffffffffffffffffffffff1661017d610358565b73ffffffffffffffffffffffffffffffffffffffff16146101d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ca90610a27565b60405180910390fd5b60004790506000811161021b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021290610a07565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff1682604051610241906108fc565b60006040518083038185875af1925050503d806000811461027e576040519150601f19603f3d011682016040523d82523d6000602084013e610283565b606091505b50509050806102c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102be906109a7565b60405180910390fd5b5050565b606481565b6102d86105e1565b73ffffffffffffffffffffffffffffffffffffffff166102f6610358565b73ffffffffffffffffffffffffffffffffffffffff161461034c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034390610a27565b60405180910390fd5b61035660006105e9565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600034116103c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103bb906109e7565b60405180910390fd5b60006064346103d39190610a7e565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161043292919061092c565b602060405180830381600087803b15801561044c57600080fd5b505af1158015610460573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104849190610700565b507f0a37b72bb67eee30e09084cf386f8a17817c57f620c3ab95fb25d6a20356ec773334836040516104b893929190610955565b60405180910390a150565b6104cb6105e1565b73ffffffffffffffffffffffffffffffffffffffff166104e9610358565b73ffffffffffffffffffffffffffffffffffffffff161461053f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053690610a27565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a6906109c7565b60405180910390fd5b6105b8816105e9565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000813590506106bc81610b73565b92915050565b6000815190506106d181610b8a565b92915050565b6000602082840312156106e957600080fd5b60006106f7848285016106ad565b91505092915050565b60006020828403121561071257600080fd5b6000610720848285016106c2565b91505092915050565b61073281610ad8565b82525050565b61074181610b20565b82525050565b6000610754601683610a6d565b91507f4661696c656420746f2073656e642062616c616e6365000000000000000000006000830152602082019050919050565b6000610794602683610a6d565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006107fa601d83610a6d565b91507f6e6f7420656e6f7567687420424e4220746f2062757920746f6b656e730000006000830152602082019050919050565b600061083a602983610a6d565b91507f4f776e65722f436f6e747261637420686173206e6f2062616c616e636520746f60008301527f20776974686472617700000000000000000000000000000000000000000000006020830152604082019050919050565b60006108a0602083610a6d565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006108e0600083610a62565b9150600082019050919050565b6108f681610b16565b82525050565b6000610907826108d3565b9150819050919050565b60006020820190506109266000830184610729565b92915050565b60006040820190506109416000830185610729565b61094e60208301846108ed565b9392505050565b600060608201905061096a6000830186610729565b61097760208301856108ed565b61098460408301846108ed565b949350505050565b60006020820190506109a16000830184610738565b92915050565b600060208201905081810360008301526109c081610747565b9050919050565b600060208201905081810360008301526109e081610787565b9050919050565b60006020820190508181036000830152610a00816107ed565b9050919050565b60006020820190508181036000830152610a208161082d565b9050919050565b60006020820190508181036000830152610a4081610893565b9050919050565b6000602082019050610a5c60008301846108ed565b92915050565b600081905092915050565b600082825260208201905092915050565b6000610a8982610b16565b9150610a9483610b16565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610acd57610acc610b44565b5b828202905092915050565b6000610ae382610af6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610b2b82610b32565b9050919050565b6000610b3d82610af6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610b7c81610ad8565b8114610b8757600080fd5b50565b610b9381610aea565b8114610b9e57600080fd5b5056fea2646970667358221220bbe732c9b8f82465895e7b26405fd6aba9e52597412e52655b6cea49908f664564736f6c63430008000033",
    "deployedBytecode": "0x6080604052600436106100705760003560e01c80638da5cb5b1161004e5780638da5cb5b146100ce578063d0febe4c146100f9578063f2fde38b14610103578063fc0c546a1461012c57610070565b80633ccfd60b146100755780633ea8f9ab1461008c578063715018a6146100b7575b600080fd5b34801561008157600080fd5b5061008a610157565b005b34801561009857600080fd5b506100a16102cb565b6040516100ae9190610a47565b60405180910390f35b3480156100c357600080fd5b506100cc6102d0565b005b3480156100da57600080fd5b506100e3610358565b6040516100f09190610911565b60405180910390f35b610101610381565b005b34801561010f57600080fd5b5061012a600480360381019061012591906106d7565b6104c3565b005b34801561013857600080fd5b506101416105bb565b60405161014e919061098c565b60405180910390f35b61015f6105e1565b73ffffffffffffffffffffffffffffffffffffffff1661017d610358565b73ffffffffffffffffffffffffffffffffffffffff16146101d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ca90610a27565b60405180910390fd5b60004790506000811161021b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021290610a07565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff1682604051610241906108fc565b60006040518083038185875af1925050503d806000811461027e576040519150601f19603f3d011682016040523d82523d6000602084013e610283565b606091505b50509050806102c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102be906109a7565b60405180910390fd5b5050565b606481565b6102d86105e1565b73ffffffffffffffffffffffffffffffffffffffff166102f6610358565b73ffffffffffffffffffffffffffffffffffffffff161461034c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034390610a27565b60405180910390fd5b61035660006105e9565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600034116103c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103bb906109e7565b60405180910390fd5b60006064346103d39190610a7e565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161043292919061092c565b602060405180830381600087803b15801561044c57600080fd5b505af1158015610460573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104849190610700565b507f0a37b72bb67eee30e09084cf386f8a17817c57f620c3ab95fb25d6a20356ec773334836040516104b893929190610955565b60405180910390a150565b6104cb6105e1565b73ffffffffffffffffffffffffffffffffffffffff166104e9610358565b73ffffffffffffffffffffffffffffffffffffffff161461053f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053690610a27565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a6906109c7565b60405180910390fd5b6105b8816105e9565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000813590506106bc81610b73565b92915050565b6000815190506106d181610b8a565b92915050565b6000602082840312156106e957600080fd5b60006106f7848285016106ad565b91505092915050565b60006020828403121561071257600080fd5b6000610720848285016106c2565b91505092915050565b61073281610ad8565b82525050565b61074181610b20565b82525050565b6000610754601683610a6d565b91507f4661696c656420746f2073656e642062616c616e6365000000000000000000006000830152602082019050919050565b6000610794602683610a6d565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006107fa601d83610a6d565b91507f6e6f7420656e6f7567687420424e4220746f2062757920746f6b656e730000006000830152602082019050919050565b600061083a602983610a6d565b91507f4f776e65722f436f6e747261637420686173206e6f2062616c616e636520746f60008301527f20776974686472617700000000000000000000000000000000000000000000006020830152604082019050919050565b60006108a0602083610a6d565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006108e0600083610a62565b9150600082019050919050565b6108f681610b16565b82525050565b6000610907826108d3565b9150819050919050565b60006020820190506109266000830184610729565b92915050565b60006040820190506109416000830185610729565b61094e60208301846108ed565b9392505050565b600060608201905061096a6000830186610729565b61097760208301856108ed565b61098460408301846108ed565b949350505050565b60006020820190506109a16000830184610738565b92915050565b600060208201905081810360008301526109c081610747565b9050919050565b600060208201905081810360008301526109e081610787565b9050919050565b60006020820190508181036000830152610a00816107ed565b9050919050565b60006020820190508181036000830152610a208161082d565b9050919050565b60006020820190508181036000830152610a4081610893565b9050919050565b6000602082019050610a5c60008301846108ed565b92915050565b600081905092915050565b600082825260208201905092915050565b6000610a8982610b16565b9150610a9483610b16565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610acd57610acc610b44565b5b828202905092915050565b6000610ae382610af6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610b2b82610b32565b9050919050565b6000610b3d82610af6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610b7c81610ad8565b8114610b8757600080fd5b50565b610b9381610aea565b8114610b9e57600080fd5b5056fea2646970667358221220bbe732c9b8f82465895e7b26405fd6aba9e52597412e52655b6cea49908f664564736f6c63430008000033",
    "immutableReferences": {},
    "generatedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:805:7",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "70:80:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "80:22:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "95:6:7"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "89:5:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "89:13:7"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "80:5:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "138:5:7"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nodeType": "YulIdentifier",
                        "src": "111:26:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "111:33:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "111:33:7"
                  }
                ]
              },
              "name": "abi_decode_t_address_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "48:6:7",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "56:3:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "64:5:7",
                  "type": ""
                }
              ],
              "src": "7:143:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "233:207:7",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "279:16:7",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "288:1:7",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "291:1:7",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "281:6:7"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "281:12:7"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "281:12:7"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "254:7:7"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "263:9:7"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "250:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "250:23:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "275:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "246:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "246:32:7"
                    },
                    "nodeType": "YulIf",
                    "src": "243:2:7"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "305:128:7",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "320:15:7",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "334:1:7",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "324:6:7",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "349:74:7",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "395:9:7"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "406:6:7"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "391:3:7"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "391:22:7"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "415:7:7"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "359:31:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "359:64:7"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "349:6:7"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "203:9:7",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "214:7:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "226:6:7",
                  "type": ""
                }
              ],
              "src": "156:284:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "491:51:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "501:35:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "530:5:7"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "512:17:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "512:24:7"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "501:7:7"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "473:5:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "483:7:7",
                  "type": ""
                }
              ],
              "src": "446:96:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "593:81:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "603:65:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "618:5:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "625:42:7",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "614:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "614:54:7"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "603:7:7"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "575:5:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "585:7:7",
                  "type": ""
                }
              ],
              "src": "548:126:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "723:79:7",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "780:16:7",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "789:1:7",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "792:1:7",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "782:6:7"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "782:12:7"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "782:12:7"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "746:5:7"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "771:5:7"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "753:17:7"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "753:24:7"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "743:2:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "743:35:7"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "736:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "736:43:7"
                    },
                    "nodeType": "YulIf",
                    "src": "733:2:7"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "716:5:7",
                  "type": ""
                }
              ],
              "src": "680:122:7"
            }
          ]
        },
        "contents": "{\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n}\n",
        "id": 7,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:9128:7",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "59:87:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "69:29:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "91:6:7"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "78:12:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "78:20:7"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "69:5:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "134:5:7"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nodeType": "YulIdentifier",
                        "src": "107:26:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "107:33:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "107:33:7"
                  }
                ]
              },
              "name": "abi_decode_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "37:6:7",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "45:3:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "53:5:7",
                  "type": ""
                }
              ],
              "src": "7:139:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "212:77:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "222:22:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "237:6:7"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "231:5:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "231:13:7"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "222:5:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "277:5:7"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bool",
                        "nodeType": "YulIdentifier",
                        "src": "253:23:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "253:30:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "253:30:7"
                  }
                ]
              },
              "name": "abi_decode_t_bool_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "190:6:7",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "198:3:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "206:5:7",
                  "type": ""
                }
              ],
              "src": "152:137:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "361:196:7",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "407:16:7",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "416:1:7",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "419:1:7",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "409:6:7"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "409:12:7"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "409:12:7"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "382:7:7"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "391:9:7"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "378:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "378:23:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "403:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "374:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "374:32:7"
                    },
                    "nodeType": "YulIf",
                    "src": "371:2:7"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "433:117:7",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "448:15:7",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "462:1:7",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "452:6:7",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "477:63:7",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "512:9:7"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "523:6:7"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "508:3:7"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "508:22:7"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "532:7:7"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "487:20:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "487:53:7"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "477:6:7"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "331:9:7",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "342:7:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "354:6:7",
                  "type": ""
                }
              ],
              "src": "295:262:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "637:204:7",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "683:16:7",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "692:1:7",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "695:1:7",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "685:6:7"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "685:12:7"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "685:12:7"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "658:7:7"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "667:9:7"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "654:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "654:23:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "679:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "650:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "650:32:7"
                    },
                    "nodeType": "YulIf",
                    "src": "647:2:7"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "709:125:7",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "724:15:7",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "738:1:7",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "728:6:7",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "753:71:7",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "796:9:7"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "807:6:7"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "792:3:7"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "792:22:7"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "816:7:7"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bool_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "763:28:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "763:61:7"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "753:6:7"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bool_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "607:9:7",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "618:7:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "630:6:7",
                  "type": ""
                }
              ],
              "src": "563:278:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "912:53:7",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "929:3:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "952:5:7"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "934:17:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "934:24:7"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "922:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "922:37:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "922:37:7"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "900:5:7",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "907:3:7",
                  "type": ""
                }
              ],
              "src": "847:118:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1048:78:7",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1065:3:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1113:5:7"
                            }
                          ],
                          "functionName": {
                            "name": "convert_t_contract$_Token_$59_to_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "1070:42:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1070:49:7"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1058:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1058:62:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1058:62:7"
                  }
                ]
              },
              "name": "abi_encode_t_contract$_Token_$59_to_t_address_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1036:5:7",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1043:3:7",
                  "type": ""
                }
              ],
              "src": "971:155:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1278:174:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1288:74:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1354:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1359:2:7",
                          "type": "",
                          "value": "22"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1295:58:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1295:67:7"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1288:3:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1383:3:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1388:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1379:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1379:11:7"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "1392:24:7",
                          "type": "",
                          "value": "Failed to send balance"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1372:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1372:45:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1372:45:7"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1427:19:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1438:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1443:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1434:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1434:12:7"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1427:3:7"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_0914e465c47bdec0afb499033b41d344c1215550b350b2c9c8c3024884b145bc_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1266:3:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "1274:3:7",
                  "type": ""
                }
              ],
              "src": "1132:320:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1604:224:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1614:74:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1680:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1685:2:7",
                          "type": "",
                          "value": "38"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1621:58:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1621:67:7"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1614:3:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1709:3:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1714:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1705:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1705:11:7"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "1718:34:7",
                          "type": "",
                          "value": "Ownable: new owner is the zero a"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1698:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1698:55:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1698:55:7"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1774:3:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1779:2:7",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1770:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1770:12:7"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "1784:8:7",
                          "type": "",
                          "value": "ddress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1763:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1763:30:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1763:30:7"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1803:19:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1814:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1819:2:7",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1810:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1810:12:7"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1803:3:7"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1592:3:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "1600:3:7",
                  "type": ""
                }
              ],
              "src": "1458:370:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1980:181:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1990:74:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2056:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2061:2:7",
                          "type": "",
                          "value": "29"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1997:58:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1997:67:7"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1990:3:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2085:3:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2090:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2081:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2081:11:7"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "2094:31:7",
                          "type": "",
                          "value": "not enought BNB to buy tokens"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2074:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2074:52:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2074:52:7"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2136:19:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2147:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2152:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2143:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2143:12:7"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2136:3:7"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_71dbf560328e1d5f8cf75aeb6374b5deb3598eb2721e18640565d033c495d3fe_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1968:3:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "1976:3:7",
                  "type": ""
                }
              ],
              "src": "1834:327:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2313:227:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2323:74:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2389:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2394:2:7",
                          "type": "",
                          "value": "41"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2330:58:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2330:67:7"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2323:3:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2418:3:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2423:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2414:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2414:11:7"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "2427:34:7",
                          "type": "",
                          "value": "Owner/Contract has no balance to"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2407:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2407:55:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2407:55:7"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2483:3:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2488:2:7",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2479:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2479:12:7"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "2493:11:7",
                          "type": "",
                          "value": " withdraw"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2472:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2472:33:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2472:33:7"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2515:19:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2526:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2531:2:7",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2522:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2522:12:7"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2515:3:7"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_86ba3b0f4f62bd721a8f719b94af1a4a0548c44fa3563a8126e9956a66a1a466_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2301:3:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2309:3:7",
                  "type": ""
                }
              ],
              "src": "2167:373:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2692:184:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2702:74:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2768:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2773:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2709:58:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2709:67:7"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2702:3:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2797:3:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2802:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2793:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2793:11:7"
                        },
                        {
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "2806:34:7",
                          "type": "",
                          "value": "Ownable: caller is not the owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2786:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2786:55:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2786:55:7"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2851:19:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2862:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2867:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2858:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2858:12:7"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2851:3:7"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2680:3:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2688:3:7",
                  "type": ""
                }
              ],
              "src": "2546:330:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3045:134:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3055:90:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3138:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3143:1:7",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3062:75:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3062:83:7"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3055:3:7"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3155:18:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3166:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3171:1:7",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3162:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3162:11:7"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3155:3:7"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3033:3:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3041:3:7",
                  "type": ""
                }
              ],
              "src": "2882:297:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3250:53:7",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3267:3:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3290:5:7"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "3272:17:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3272:24:7"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3260:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3260:37:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3260:37:7"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3238:5:7",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3245:3:7",
                  "type": ""
                }
              ],
              "src": "3185:118:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3497:191:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3508:154:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3658:3:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3515:141:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3515:147:7"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3508:3:7"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3672:10:7",
                    "value": {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "3679:3:7"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3672:3:7"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_packed_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3484:3:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3493:3:7",
                  "type": ""
                }
              ],
              "src": "3309:379:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3792:124:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3802:26:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3814:9:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3825:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "3810:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3810:18:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "3802:4:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3882:6:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3895:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3906:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3891:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3891:17:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "3838:43:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3838:71:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3838:71:7"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3764:9:7",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3776:6:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "3787:4:7",
                  "type": ""
                }
              ],
              "src": "3694:222:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4048:206:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4058:26:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4070:9:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4081:2:7",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4066:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4066:18:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4058:4:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4138:6:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4151:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4162:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4147:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4147:17:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4094:43:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4094:71:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4094:71:7"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4219:6:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4232:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4243:2:7",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4228:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4228:18:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4175:43:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4175:72:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4175:72:7"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4012:9:7",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "4024:6:7",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4032:6:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4043:4:7",
                  "type": ""
                }
              ],
              "src": "3922:332:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4414:288:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4424:26:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4436:9:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4447:2:7",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4432:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4432:18:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4424:4:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4504:6:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4517:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4528:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4513:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4513:17:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4460:43:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4460:71:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4460:71:7"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4585:6:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4598:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4609:2:7",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4594:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4594:18:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4541:43:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4541:72:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4541:72:7"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "4667:6:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4680:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4691:2:7",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4676:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4676:18:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4623:43:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4623:72:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4623:72:7"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_uint256_t_uint256__to_t_address_t_uint256_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4370:9:7",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "4382:6:7",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "4390:6:7",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4398:6:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4409:4:7",
                  "type": ""
                }
              ],
              "src": "4260:442:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4818:136:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4828:26:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4840:9:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4851:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4836:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4836:18:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4828:4:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4920:6:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4933:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4944:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4929:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4929:17:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_contract$_Token_$59_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4864:55:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4864:83:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4864:83:7"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_contract$_Token_$59__to_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4790:9:7",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4802:6:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4813:4:7",
                  "type": ""
                }
              ],
              "src": "4708:246:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5131:248:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5141:26:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5153:9:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5164:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5149:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5149:18:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5141:4:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5188:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5199:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5184:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5184:17:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "5207:4:7"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5213:9:7"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "5203:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5203:20:7"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5177:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5177:47:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5177:47:7"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5233:139:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "5367:4:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_0914e465c47bdec0afb499033b41d344c1215550b350b2c9c8c3024884b145bc_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "5241:124:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5241:131:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5233:4:7"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_0914e465c47bdec0afb499033b41d344c1215550b350b2c9c8c3024884b145bc__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5111:9:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5126:4:7",
                  "type": ""
                }
              ],
              "src": "4960:419:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5556:248:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5566:26:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5578:9:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5589:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5574:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5574:18:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5566:4:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5613:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5624:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5609:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5609:17:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "5632:4:7"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5638:9:7"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "5628:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5628:20:7"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5602:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5602:47:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5602:47:7"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5658:139:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "5792:4:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "5666:124:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5666:131:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5658:4:7"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5536:9:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5551:4:7",
                  "type": ""
                }
              ],
              "src": "5385:419:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5981:248:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5991:26:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6003:9:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6014:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5999:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5999:18:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5991:4:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6038:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6049:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6034:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6034:17:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "6057:4:7"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6063:9:7"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6053:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6053:20:7"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6027:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6027:47:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6027:47:7"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6083:139:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "6217:4:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_71dbf560328e1d5f8cf75aeb6374b5deb3598eb2721e18640565d033c495d3fe_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6091:124:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6091:131:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6083:4:7"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_71dbf560328e1d5f8cf75aeb6374b5deb3598eb2721e18640565d033c495d3fe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5961:9:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5976:4:7",
                  "type": ""
                }
              ],
              "src": "5810:419:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6406:248:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6416:26:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6428:9:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6439:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6424:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6424:18:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6416:4:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6463:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6474:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6459:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6459:17:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "6482:4:7"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6488:9:7"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6478:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6478:20:7"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6452:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6452:47:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6452:47:7"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6508:139:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "6642:4:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_86ba3b0f4f62bd721a8f719b94af1a4a0548c44fa3563a8126e9956a66a1a466_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6516:124:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6516:131:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6508:4:7"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_86ba3b0f4f62bd721a8f719b94af1a4a0548c44fa3563a8126e9956a66a1a466__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6386:9:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6401:4:7",
                  "type": ""
                }
              ],
              "src": "6235:419:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6831:248:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6841:26:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6853:9:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6864:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6849:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6849:18:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6841:4:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6888:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6899:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6884:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6884:17:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "6907:4:7"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6913:9:7"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6903:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6903:20:7"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6877:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6877:47:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6877:47:7"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6933:139:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "7067:4:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6941:124:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6941:131:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6933:4:7"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6811:9:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6826:4:7",
                  "type": ""
                }
              ],
              "src": "6660:419:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7183:124:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7193:26:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7205:9:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7216:2:7",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7201:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7201:18:7"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7193:4:7"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "7273:6:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7286:9:7"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7297:1:7",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7282:3:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7282:17:7"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "7229:43:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7229:71:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7229:71:7"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "7155:9:7",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "7167:6:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "7178:4:7",
                  "type": ""
                }
              ],
              "src": "7085:222:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7426:34:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7436:18:7",
                    "value": {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "7451:3:7"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "7436:11:7"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "7398:3:7",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "7403:6:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "7414:11:7",
                  "type": ""
                }
              ],
              "src": "7313:147:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7562:73:7",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "7579:3:7"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "7584:6:7"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7572:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7572:19:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7572:19:7"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7600:29:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "7619:3:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7624:4:7",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7615:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7615:14:7"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "7600:11:7"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "7534:3:7",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "7539:6:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "7550:11:7",
                  "type": ""
                }
              ],
              "src": "7466:169:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7689:300:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "7699:25:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "7722:1:7"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "7704:17:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7704:20:7"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "7699:1:7"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7733:25:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "7756:1:7"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "7738:17:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7738:20:7"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "7733:1:7"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "7931:22:7",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "7933:16:7"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7933:18:7"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "7933:18:7"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "7843:1:7"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "7836:6:7"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7836:9:7"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "7829:6:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7829:17:7"
                        },
                        {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "7851:1:7"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7858:66:7",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                },
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "7926:1:7"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "7854:3:7"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7854:74:7"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "7848:2:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7848:81:7"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "7825:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7825:105:7"
                    },
                    "nodeType": "YulIf",
                    "src": "7822:2:7"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7963:20:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "7978:1:7"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "7981:1:7"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "7974:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7974:9:7"
                    },
                    "variableNames": [
                      {
                        "name": "product",
                        "nodeType": "YulIdentifier",
                        "src": "7963:7:7"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_mul_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "7672:1:7",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "7675:1:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "product",
                  "nodeType": "YulTypedName",
                  "src": "7681:7:7",
                  "type": ""
                }
              ],
              "src": "7641:348:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8040:51:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8050:35:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "8079:5:7"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "8061:17:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8061:24:7"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "8050:7:7"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "8022:5:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "8032:7:7",
                  "type": ""
                }
              ],
              "src": "7995:96:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8139:48:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8149:32:7",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "8174:5:7"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "8167:6:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8167:13:7"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "8160:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8160:21:7"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "8149:7:7"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "8121:5:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "8131:7:7",
                  "type": ""
                }
              ],
              "src": "8097:90:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8238:81:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8248:65:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "8263:5:7"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8270:42:7",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "8259:3:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8259:54:7"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "8248:7:7"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "8220:5:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "8230:7:7",
                  "type": ""
                }
              ],
              "src": "8193:126:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8370:32:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8380:16:7",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "8391:5:7"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "8380:7:7"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "8352:5:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "8362:7:7",
                  "type": ""
                }
              ],
              "src": "8325:77:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8480:78:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8490:62:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "8546:5:7"
                        }
                      ],
                      "functionName": {
                        "name": "convert_t_contract$_Token_$59_to_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "8503:42:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8503:49:7"
                    },
                    "variableNames": [
                      {
                        "name": "converted",
                        "nodeType": "YulIdentifier",
                        "src": "8490:9:7"
                      }
                    ]
                  }
                ]
              },
              "name": "convert_t_contract$_Token_$59_to_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "8460:5:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "converted",
                  "nodeType": "YulTypedName",
                  "src": "8470:9:7",
                  "type": ""
                }
              ],
              "src": "8408:150:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8636:53:7",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8646:37:7",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "8677:5:7"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "8659:17:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8659:24:7"
                    },
                    "variableNames": [
                      {
                        "name": "converted",
                        "nodeType": "YulIdentifier",
                        "src": "8646:9:7"
                      }
                    ]
                  }
                ]
              },
              "name": "convert_t_contract$_Token_$59_to_t_uint160",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "8616:5:7",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "converted",
                  "nodeType": "YulTypedName",
                  "src": "8626:9:7",
                  "type": ""
                }
              ],
              "src": "8564:125:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8723:152:7",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8740:1:7",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8743:77:7",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8733:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8733:88:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8733:88:7"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8837:1:7",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8840:4:7",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8830:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8830:15:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8830:15:7"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8861:1:7",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8864:4:7",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "8854:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8854:15:7"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8854:15:7"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "8695:180:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8924:79:7",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8981:16:7",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "8990:1:7",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "8993:1:7",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "8983:6:7"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8983:12:7"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8983:12:7"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "8947:5:7"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "8972:5:7"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "8954:17:7"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8954:24:7"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "8944:2:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8944:35:7"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "8937:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8937:43:7"
                    },
                    "nodeType": "YulIf",
                    "src": "8934:2:7"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "8917:5:7",
                  "type": ""
                }
              ],
              "src": "8881:122:7"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9049:76:7",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9103:16:7",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "9112:1:7",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "9115:1:7",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "9105:6:7"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9105:12:7"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9105:12:7"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "9072:5:7"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "9094:5:7"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bool",
                                "nodeType": "YulIdentifier",
                                "src": "9079:14:7"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9079:21:7"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "9069:2:7"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9069:32:7"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "9062:6:7"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9062:40:7"
                    },
                    "nodeType": "YulIf",
                    "src": "9059:2:7"
                  }
                ]
              },
              "name": "validator_revert_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "9042:5:7",
                  "type": ""
                }
              ],
              "src": "9009:116:7"
            }
          ]
        },
        "contents": "{\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_t_bool_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bool_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_contract$_Token_$59_to_t_address_fromStack(value, pos) {\n        mstore(pos, convert_t_contract$_Token_$59_to_t_address(value))\n    }\n\n    function abi_encode_t_stringliteral_0914e465c47bdec0afb499033b41d344c1215550b350b2c9c8c3024884b145bc_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 22)\n\n        mstore(add(pos, 0), \"Failed to send balance\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n\n        mstore(add(pos, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(pos, 32), \"ddress\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_71dbf560328e1d5f8cf75aeb6374b5deb3598eb2721e18640565d033c495d3fe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n\n        mstore(add(pos, 0), \"not enought BNB to buy tokens\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_86ba3b0f4f62bd721a8f719b94af1a4a0548c44fa3563a8126e9956a66a1a466_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 41)\n\n        mstore(add(pos, 0), \"Owner/Contract has no balance to\")\n\n        mstore(add(pos, 32), \" withdraw\")\n\n        end := add(pos, 64)\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n\n        mstore(add(pos, 0), \"Ownable: caller is not the owner\")\n\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack(pos, 0)\n\n        end := add(pos, 0)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_packed_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470__to_t_bytes_memory_ptr__nonPadded_inplace_fromStack_reversed(pos ) -> end {\n\n        pos := abi_encode_t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470_to_t_bytes_memory_ptr_nonPadded_inplace_fromStack( pos)\n\n        end := pos\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function abi_encode_tuple_t_address_t_uint256_t_uint256__to_t_address_t_uint256_t_uint256__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function abi_encode_tuple_t_contract$_Token_$59__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_contract$_Token_$59_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_0914e465c47bdec0afb499033b41d344c1215550b350b2c9c8c3024884b145bc__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0914e465c47bdec0afb499033b41d344c1215550b350b2c9c8c3024884b145bc_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_71dbf560328e1d5f8cf75aeb6374b5deb3598eb2721e18640565d033c495d3fe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_71dbf560328e1d5f8cf75aeb6374b5deb3598eb2721e18640565d033c495d3fe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_86ba3b0f4f62bd721a8f719b94af1a4a0548c44fa3563a8126e9956a66a1a466__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_86ba3b0f4f62bd721a8f719b94af1a4a0548c44fa3563a8126e9956a66a1a466_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function convert_t_contract$_Token_$59_to_t_address(value) -> converted {\n        converted := convert_t_contract$_Token_$59_to_t_uint160(value)\n    }\n\n    function convert_t_contract$_Token_$59_to_t_uint160(value) -> converted {\n        converted := cleanup_t_uint160(value)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n}\n",
        "id": 7,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "148:869:1:-:0;;;258:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;921:32:2;940:12;:10;;;:12;;:::i;:::-;921:18;;;:32;;:::i;:::-;313:12:1;299:5;;:27;;;;;;;;;;;;;;;;;;258:76;148:869;;640:96:6;693:7;719:10;712:17;;640:96;:::o;2270:187:2:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2270:187;;:::o;7:143:7:-;;95:6;89:13;80:22;;111:33;138:5;111:33;:::i;:::-;70:80;;;;:::o;156:284::-;;275:2;263:9;254:7;250:23;246:32;243:2;;;291:1;288;281:12;243:2;334:1;359:64;415:7;406:6;395:9;391:22;359:64;:::i;:::-;349:74;;305:128;233:207;;;;:::o;446:96::-;;512:24;530:5;512:24;:::i;:::-;501:35;;491:51;;;:::o;548:126::-;;625:42;618:5;614:54;603:65;;593:81;;;:::o;680:122::-;753:24;771:5;753:24;:::i;:::-;746:5;743:35;733:2;;792:1;789;782:12;733:2;723:79;:::o;148:869:1:-;;;;;;;",
    "deployedSourceMap": "148:869:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;737:277;;;;;;;;;;;;;:::i;:::-;;207:42;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1668:101:2;;;;;;;;;;;;;:::i;:::-;;1036:85;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;434:289:1;;;:::i;:::-;;1918:198:2;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;182:18:1;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;737:277;1259:12:2;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;780:20:1::1;803:21;780:44;;854:1;839:12;:16;831:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;909:9;922:10;:15;;945:12;922:40;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;908:54;;;977:4;969:39;;;;;;;;;;;;:::i;:::-;;;;;;;;;1318:1:2;;737:277:1:o:0;207:42::-;246:3;207:42;:::o;1668:101:2:-;1259:12;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1732:30:::1;1759:1;1732:18;:30::i;:::-;1668:101::o:0;1036:85::-;1082:7;1108:6;;;;;;;;;;;1101:13;;1036:85;:::o;434:289:1:-;501:1;489:9;:13;481:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;547:21;246:3;571:9;:24;;;;:::i;:::-;547:48;;606:5;;;;;;;;;;;:14;;;621:10;633:16;606:44;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;666:49;676:10;687:9;698:16;666:49;;;;;;;;:::i;:::-;;;;;;;;434:289;:::o;1918:198:2:-;1259:12;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;2026:1:::1;2006:22;;:8;:22;;;;1998:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2081:28;2100:8;2081:18;:28::i;:::-;1918:198:::0;:::o;182:18:1:-;;;;;;;;;;;;;:::o;640:96:6:-;693:7;719:10;712:17;;640:96;:::o;2270:187:2:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2270:187;;:::o;7:139:7:-;;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;59:87;;;;:::o;152:137::-;;237:6;231:13;222:22;;253:30;277:5;253:30;:::i;:::-;212:77;;;;:::o;295:262::-;;403:2;391:9;382:7;378:23;374:32;371:2;;;419:1;416;409:12;371:2;462:1;487:53;532:7;523:6;512:9;508:22;487:53;:::i;:::-;477:63;;433:117;361:196;;;;:::o;563:278::-;;679:2;667:9;658:7;654:23;650:32;647:2;;;695:1;692;685:12;647:2;738:1;763:61;816:7;807:6;796:9;792:22;763:61;:::i;:::-;753:71;;709:125;637:204;;;;:::o;847:118::-;934:24;952:5;934:24;:::i;:::-;929:3;922:37;912:53;;:::o;971:155::-;1070:49;1113:5;1070:49;:::i;:::-;1065:3;1058:62;1048:78;;:::o;1132:320::-;;1295:67;1359:2;1354:3;1295:67;:::i;:::-;1288:74;;1392:24;1388:1;1383:3;1379:11;1372:45;1443:2;1438:3;1434:12;1427:19;;1278:174;;;:::o;1458:370::-;;1621:67;1685:2;1680:3;1621:67;:::i;:::-;1614:74;;1718:34;1714:1;1709:3;1705:11;1698:55;1784:8;1779:2;1774:3;1770:12;1763:30;1819:2;1814:3;1810:12;1803:19;;1604:224;;;:::o;1834:327::-;;1997:67;2061:2;2056:3;1997:67;:::i;:::-;1990:74;;2094:31;2090:1;2085:3;2081:11;2074:52;2152:2;2147:3;2143:12;2136:19;;1980:181;;;:::o;2167:373::-;;2330:67;2394:2;2389:3;2330:67;:::i;:::-;2323:74;;2427:34;2423:1;2418:3;2414:11;2407:55;2493:11;2488:2;2483:3;2479:12;2472:33;2531:2;2526:3;2522:12;2515:19;;2313:227;;;:::o;2546:330::-;;2709:67;2773:2;2768:3;2709:67;:::i;:::-;2702:74;;2806:34;2802:1;2797:3;2793:11;2786:55;2867:2;2862:3;2858:12;2851:19;;2692:184;;;:::o;2882:297::-;;3062:83;3143:1;3138:3;3062:83;:::i;:::-;3055:90;;3171:1;3166:3;3162:11;3155:18;;3045:134;;;:::o;3185:118::-;3272:24;3290:5;3272:24;:::i;:::-;3267:3;3260:37;3250:53;;:::o;3309:379::-;;3515:147;3658:3;3515:147;:::i;:::-;3508:154;;3679:3;3672:10;;3497:191;;;:::o;3694:222::-;;3825:2;3814:9;3810:18;3802:26;;3838:71;3906:1;3895:9;3891:17;3882:6;3838:71;:::i;:::-;3792:124;;;;:::o;3922:332::-;;4081:2;4070:9;4066:18;4058:26;;4094:71;4162:1;4151:9;4147:17;4138:6;4094:71;:::i;:::-;4175:72;4243:2;4232:9;4228:18;4219:6;4175:72;:::i;:::-;4048:206;;;;;:::o;4260:442::-;;4447:2;4436:9;4432:18;4424:26;;4460:71;4528:1;4517:9;4513:17;4504:6;4460:71;:::i;:::-;4541:72;4609:2;4598:9;4594:18;4585:6;4541:72;:::i;:::-;4623;4691:2;4680:9;4676:18;4667:6;4623:72;:::i;:::-;4414:288;;;;;;:::o;4708:246::-;;4851:2;4840:9;4836:18;4828:26;;4864:83;4944:1;4933:9;4929:17;4920:6;4864:83;:::i;:::-;4818:136;;;;:::o;4960:419::-;;5164:2;5153:9;5149:18;5141:26;;5213:9;5207:4;5203:20;5199:1;5188:9;5184:17;5177:47;5241:131;5367:4;5241:131;:::i;:::-;5233:139;;5131:248;;;:::o;5385:419::-;;5589:2;5578:9;5574:18;5566:26;;5638:9;5632:4;5628:20;5624:1;5613:9;5609:17;5602:47;5666:131;5792:4;5666:131;:::i;:::-;5658:139;;5556:248;;;:::o;5810:419::-;;6014:2;6003:9;5999:18;5991:26;;6063:9;6057:4;6053:20;6049:1;6038:9;6034:17;6027:47;6091:131;6217:4;6091:131;:::i;:::-;6083:139;;5981:248;;;:::o;6235:419::-;;6439:2;6428:9;6424:18;6416:26;;6488:9;6482:4;6478:20;6474:1;6463:9;6459:17;6452:47;6516:131;6642:4;6516:131;:::i;:::-;6508:139;;6406:248;;;:::o;6660:419::-;;6864:2;6853:9;6849:18;6841:26;;6913:9;6907:4;6903:20;6899:1;6888:9;6884:17;6877:47;6941:131;7067:4;6941:131;:::i;:::-;6933:139;;6831:248;;;:::o;7085:222::-;;7216:2;7205:9;7201:18;7193:26;;7229:71;7297:1;7286:9;7282:17;7273:6;7229:71;:::i;:::-;7183:124;;;;:::o;7313:147::-;;7451:3;7436:18;;7426:34;;;;:::o;7466:169::-;;7584:6;7579:3;7572:19;7624:4;7619:3;7615:14;7600:29;;7562:73;;;;:::o;7641:348::-;;7704:20;7722:1;7704:20;:::i;:::-;7699:25;;7738:20;7756:1;7738:20;:::i;:::-;7733:25;;7926:1;7858:66;7854:74;7851:1;7848:81;7843:1;7836:9;7829:17;7825:105;7822:2;;;7933:18;;:::i;:::-;7822:2;7981:1;7978;7974:9;7963:20;;7689:300;;;;:::o;7995:96::-;;8061:24;8079:5;8061:24;:::i;:::-;8050:35;;8040:51;;;:::o;8097:90::-;;8174:5;8167:13;8160:21;8149:32;;8139:48;;;:::o;8193:126::-;;8270:42;8263:5;8259:54;8248:65;;8238:81;;;:::o;8325:77::-;;8391:5;8380:16;;8370:32;;;:::o;8408:150::-;;8503:49;8546:5;8503:49;:::i;:::-;8490:62;;8480:78;;;:::o;8564:125::-;;8659:24;8677:5;8659:24;:::i;:::-;8646:37;;8636:53;;;:::o;8695:180::-;8743:77;8740:1;8733:88;8840:4;8837:1;8830:15;8864:4;8861:1;8854:15;8881:122;8954:24;8972:5;8954:24;:::i;:::-;8947:5;8944:35;8934:2;;8993:1;8990;8983:12;8934:2;8924:79;:::o;9009:116::-;9079:21;9094:5;9079:21;:::i;:::-;9072:5;9069:32;9059:2;;9115:1;9112;9105:12;9059:2;9049:76;:::o",
    "source": "// SPDX-License-Identifier: MIT\r\npragma solidity >=0.4.22 <0.9.0;\r\nimport \"../openzeppelin/contracts/access/Ownable.sol\";\r\nimport \"./Token.sol\";\r\n\r\ncontract Vendor is Ownable {\r\n    Token public token;\r\n    uint256 public constant tokensPerBnb = 100;\r\n\r\n    constructor(address tokenAddress) {\r\n    token = Token(tokenAddress);\r\n    }\r\n    \r\n    event BuyTokens(address buyer, uint256 amountOfBnb, uint256 amountOfTokens);\r\n    \r\n    function buyTokens() public payable {\r\n        require(msg.value > 0, 'not enought BNB to buy tokens');\r\n        uint amountToTransfer = msg.value * tokensPerBnb;\r\n        token.transfer(msg.sender, amountToTransfer);\r\n        emit BuyTokens(msg.sender,msg.value, amountToTransfer);\r\n    }  \r\n    \r\n    function withdraw() public onlyOwner{\r\n    uint256 ownerBalance = address(this).balance;\r\n    require(ownerBalance > 0, 'Owner/Contract has no balance to withdraw');\r\n    (bool sent,)= msg.sender.call{value: ownerBalance}(\"\");\r\n    require(sent, \"Failed to send balance\");\r\n  }\r\n}",
    "sourcePath": "W:\\devroom\\testing\\contracts\\Vendor.sol",
    "ast": {
      "absolutePath": "project:/contracts/Vendor.sol",
      "exportedSymbols": {
        "Context": [
          981
        ],
        "Ownable": [
          268
        ],
        "Token": [
          59
        ],
        "Vendor": [
          163
        ]
      },
      "id": 164,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 61,
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".22",
            "<",
            "0.9",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "33:32:1"
        },
        {
          "absolutePath": "project:/openzeppelin/contracts/access/Ownable.sol",
          "file": "../openzeppelin/contracts/access/Ownable.sol",
          "id": 62,
          "nodeType": "ImportDirective",
          "scope": 164,
          "sourceUnit": 269,
          "src": "67:54:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "project:/contracts/Token.sol",
          "file": "./Token.sol",
          "id": 63,
          "nodeType": "ImportDirective",
          "scope": 164,
          "sourceUnit": 60,
          "src": "123:21:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 64,
                "name": "Ownable",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 268,
                "src": "167:7:1"
              },
              "id": 65,
              "nodeType": "InheritanceSpecifier",
              "src": "167:7:1"
            }
          ],
          "contractDependencies": [
            268,
            981
          ],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 163,
          "linearizedBaseContracts": [
            163,
            268,
            981
          ],
          "name": "Vendor",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "fc0c546a",
              "id": 68,
              "mutability": "mutable",
              "name": "token",
              "nodeType": "VariableDeclaration",
              "scope": 163,
              "src": "182:18:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Token_$59",
                "typeString": "contract Token"
              },
              "typeName": {
                "id": 67,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 66,
                  "name": "Token",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 59,
                  "src": "182:5:1"
                },
                "referencedDeclaration": 59,
                "src": "182:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Token_$59",
                  "typeString": "contract Token"
                }
              },
              "visibility": "public"
            },
            {
              "constant": true,
              "functionSelector": "3ea8f9ab",
              "id": 71,
              "mutability": "constant",
              "name": "tokensPerBnb",
              "nodeType": "VariableDeclaration",
              "scope": 163,
              "src": "207:42:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 69,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "207:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "hexValue": "313030",
                "id": 70,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "246:3:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_100_by_1",
                  "typeString": "int_const 100"
                },
                "value": "100"
              },
              "visibility": "public"
            },
            {
              "body": {
                "id": 82,
                "nodeType": "Block",
                "src": "292:42:1",
                "statements": [
                  {
                    "expression": {
                      "id": 80,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 76,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68,
                        "src": "299:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Token_$59",
                          "typeString": "contract Token"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 78,
                            "name": "tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "313:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 77,
                          "name": "Token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59,
                          "src": "307:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Token_$59_$",
                            "typeString": "type(contract Token)"
                          }
                        },
                        "id": 79,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "307:19:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Token_$59",
                          "typeString": "contract Token"
                        }
                      },
                      "src": "299:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Token_$59",
                        "typeString": "contract Token"
                      }
                    },
                    "id": 81,
                    "nodeType": "ExpressionStatement",
                    "src": "299:27:1"
                  }
                ]
              },
              "id": 83,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 74,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 73,
                    "mutability": "mutable",
                    "name": "tokenAddress",
                    "nodeType": "VariableDeclaration",
                    "scope": 83,
                    "src": "270:20:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 72,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "270:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "269:22:1"
              },
              "returnParameters": {
                "id": 75,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "292:0:1"
              },
              "scope": 163,
              "src": "258:76:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "anonymous": false,
              "id": 91,
              "name": "BuyTokens",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 90,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 85,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "buyer",
                    "nodeType": "VariableDeclaration",
                    "scope": 91,
                    "src": "362:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 84,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "362:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 87,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amountOfBnb",
                    "nodeType": "VariableDeclaration",
                    "scope": 91,
                    "src": "377:19:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 86,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "377:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 89,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amountOfTokens",
                    "nodeType": "VariableDeclaration",
                    "scope": 91,
                    "src": "398:22:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 88,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "398:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "361:60:1"
              },
              "src": "346:76:1"
            },
            {
              "body": {
                "id": 125,
                "nodeType": "Block",
                "src": "470:253:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 98,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 95,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "489:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 96,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "489:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 97,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "501:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "489:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "6e6f7420656e6f7567687420424e4220746f2062757920746f6b656e73",
                          "id": 99,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "504:31:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_71dbf560328e1d5f8cf75aeb6374b5deb3598eb2721e18640565d033c495d3fe",
                            "typeString": "literal_string \"not enought BNB to buy tokens\""
                          },
                          "value": "not enought BNB to buy tokens"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_71dbf560328e1d5f8cf75aeb6374b5deb3598eb2721e18640565d033c495d3fe",
                            "typeString": "literal_string \"not enought BNB to buy tokens\""
                          }
                        ],
                        "id": 94,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "481:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 100,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "481:55:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 101,
                    "nodeType": "ExpressionStatement",
                    "src": "481:55:1"
                  },
                  {
                    "assignments": [
                      103
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 103,
                        "mutability": "mutable",
                        "name": "amountToTransfer",
                        "nodeType": "VariableDeclaration",
                        "scope": 125,
                        "src": "547:21:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 102,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "547:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 108,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 104,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "571:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 105,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "571:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 106,
                        "name": "tokensPerBnb",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "583:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "571:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "547:48:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 112,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "621:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "621:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 114,
                          "name": "amountToTransfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 103,
                          "src": "633:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 109,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 68,
                          "src": "606:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Token_$59",
                            "typeString": "contract Token"
                          }
                        },
                        "id": 111,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 392,
                        "src": "606:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 115,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "606:44:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 116,
                    "nodeType": "ExpressionStatement",
                    "src": "606:44:1"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 118,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "676:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 119,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "676:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 120,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "687:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "687:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 122,
                          "name": "amountToTransfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 103,
                          "src": "698:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 117,
                        "name": "BuyTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91,
                        "src": "666:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256,uint256)"
                        }
                      },
                      "id": 123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "666:49:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 124,
                    "nodeType": "EmitStatement",
                    "src": "661:54:1"
                  }
                ]
              },
              "functionSelector": "d0febe4c",
              "id": 126,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "buyTokens",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 92,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "452:2:1"
              },
              "returnParameters": {
                "id": 93,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "470:0:1"
              },
              "scope": 163,
              "src": "434:289:1",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 161,
                "nodeType": "Block",
                "src": "773:241:1",
                "statements": [
                  {
                    "assignments": [
                      132
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 132,
                        "mutability": "mutable",
                        "name": "ownerBalance",
                        "nodeType": "VariableDeclaration",
                        "scope": 161,
                        "src": "780:20:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 131,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "780:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 138,
                    "initialValue": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 135,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "811:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Vendor_$163",
                              "typeString": "contract Vendor"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Vendor_$163",
                              "typeString": "contract Vendor"
                            }
                          ],
                          "id": 134,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "803:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 133,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "803:7:1",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "803:13:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 137,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "src": "803:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "780:44:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 142,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 140,
                            "name": "ownerBalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 132,
                            "src": "839:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 141,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "854:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "839:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4f776e65722f436f6e747261637420686173206e6f2062616c616e636520746f207769746864726177",
                          "id": 143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "857:43:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_86ba3b0f4f62bd721a8f719b94af1a4a0548c44fa3563a8126e9956a66a1a466",
                            "typeString": "literal_string \"Owner/Contract has no balance to withdraw\""
                          },
                          "value": "Owner/Contract has no balance to withdraw"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_86ba3b0f4f62bd721a8f719b94af1a4a0548c44fa3563a8126e9956a66a1a466",
                            "typeString": "literal_string \"Owner/Contract has no balance to withdraw\""
                          }
                        ],
                        "id": 139,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "831:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 144,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "831:70:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 145,
                    "nodeType": "ExpressionStatement",
                    "src": "831:70:1"
                  },
                  {
                    "assignments": [
                      147,
                      null
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 147,
                        "mutability": "mutable",
                        "name": "sent",
                        "nodeType": "VariableDeclaration",
                        "scope": 161,
                        "src": "909:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 146,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "909:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "visibility": "internal"
                      },
                      null
                    ],
                    "id": 155,
                    "initialValue": {
                      "arguments": [
                        {
                          "hexValue": "",
                          "id": 153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "959:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                              "typeString": "literal_string \"\""
                            }
                          ],
                          "expression": {
                            "expression": {
                              "id": 148,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "922:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 149,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "922:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 150,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "call",
                          "nodeType": "MemberAccess",
                          "src": "922:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                          }
                        },
                        "id": 152,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "names": [
                          "value"
                        ],
                        "nodeType": "FunctionCallOptions",
                        "options": [
                          {
                            "id": 151,
                            "name": "ownerBalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 132,
                            "src": "945:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "src": "922:36:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "922:40:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "tuple(bool,bytes memory)"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "908:54:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 157,
                          "name": "sent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 147,
                          "src": "977:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4661696c656420746f2073656e642062616c616e6365",
                          "id": 158,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "983:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_0914e465c47bdec0afb499033b41d344c1215550b350b2c9c8c3024884b145bc",
                            "typeString": "literal_string \"Failed to send balance\""
                          },
                          "value": "Failed to send balance"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_0914e465c47bdec0afb499033b41d344c1215550b350b2c9c8c3024884b145bc",
                            "typeString": "literal_string \"Failed to send balance\""
                          }
                        ],
                        "id": 156,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "969:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "969:39:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 160,
                    "nodeType": "ExpressionStatement",
                    "src": "969:39:1"
                  }
                ]
              },
              "functionSelector": "3ccfd60b",
              "id": 162,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 129,
                  "modifierName": {
                    "id": 128,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 210,
                    "src": "764:9:1"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "764:9:1"
                }
              ],
              "name": "withdraw",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 127,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "754:2:1"
              },
              "returnParameters": {
                "id": 130,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "773:0:1"
              },
              "scope": 163,
              "src": "737:277:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 164,
          "src": "148:869:1"
        }
      ],
      "src": "33:984:1"
    },
    "legacyAST": {
      "absolutePath": "project:/contracts/Vendor.sol",
      "exportedSymbols": {
        "Context": [
          981
        ],
        "Ownable": [
          268
        ],
        "Token": [
          59
        ],
        "Vendor": [
          163
        ]
      },
      "id": 164,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 61,
          "literals": [
            "solidity",
            ">=",
            "0.4",
            ".22",
            "<",
            "0.9",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "33:32:1"
        },
        {
          "absolutePath": "project:/openzeppelin/contracts/access/Ownable.sol",
          "file": "../openzeppelin/contracts/access/Ownable.sol",
          "id": 62,
          "nodeType": "ImportDirective",
          "scope": 164,
          "sourceUnit": 269,
          "src": "67:54:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "project:/contracts/Token.sol",
          "file": "./Token.sol",
          "id": 63,
          "nodeType": "ImportDirective",
          "scope": 164,
          "sourceUnit": 60,
          "src": "123:21:1",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 64,
                "name": "Ownable",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 268,
                "src": "167:7:1"
              },
              "id": 65,
              "nodeType": "InheritanceSpecifier",
              "src": "167:7:1"
            }
          ],
          "contractDependencies": [
            268,
            981
          ],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 163,
          "linearizedBaseContracts": [
            163,
            268,
            981
          ],
          "name": "Vendor",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "constant": false,
              "functionSelector": "fc0c546a",
              "id": 68,
              "mutability": "mutable",
              "name": "token",
              "nodeType": "VariableDeclaration",
              "scope": 163,
              "src": "182:18:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Token_$59",
                "typeString": "contract Token"
              },
              "typeName": {
                "id": 67,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 66,
                  "name": "Token",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 59,
                  "src": "182:5:1"
                },
                "referencedDeclaration": 59,
                "src": "182:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Token_$59",
                  "typeString": "contract Token"
                }
              },
              "visibility": "public"
            },
            {
              "constant": true,
              "functionSelector": "3ea8f9ab",
              "id": 71,
              "mutability": "constant",
              "name": "tokensPerBnb",
              "nodeType": "VariableDeclaration",
              "scope": 163,
              "src": "207:42:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 69,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "207:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "hexValue": "313030",
                "id": 70,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "246:3:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_100_by_1",
                  "typeString": "int_const 100"
                },
                "value": "100"
              },
              "visibility": "public"
            },
            {
              "body": {
                "id": 82,
                "nodeType": "Block",
                "src": "292:42:1",
                "statements": [
                  {
                    "expression": {
                      "id": 80,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 76,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 68,
                        "src": "299:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Token_$59",
                          "typeString": "contract Token"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 78,
                            "name": "tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "313:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 77,
                          "name": "Token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59,
                          "src": "307:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Token_$59_$",
                            "typeString": "type(contract Token)"
                          }
                        },
                        "id": 79,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "307:19:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Token_$59",
                          "typeString": "contract Token"
                        }
                      },
                      "src": "299:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Token_$59",
                        "typeString": "contract Token"
                      }
                    },
                    "id": 81,
                    "nodeType": "ExpressionStatement",
                    "src": "299:27:1"
                  }
                ]
              },
              "id": 83,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 74,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 73,
                    "mutability": "mutable",
                    "name": "tokenAddress",
                    "nodeType": "VariableDeclaration",
                    "scope": 83,
                    "src": "270:20:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 72,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "270:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "269:22:1"
              },
              "returnParameters": {
                "id": 75,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "292:0:1"
              },
              "scope": 163,
              "src": "258:76:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "anonymous": false,
              "id": 91,
              "name": "BuyTokens",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 90,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 85,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "buyer",
                    "nodeType": "VariableDeclaration",
                    "scope": 91,
                    "src": "362:13:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 84,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "362:7:1",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 87,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amountOfBnb",
                    "nodeType": "VariableDeclaration",
                    "scope": 91,
                    "src": "377:19:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 86,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "377:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 89,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "amountOfTokens",
                    "nodeType": "VariableDeclaration",
                    "scope": 91,
                    "src": "398:22:1",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 88,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "398:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "361:60:1"
              },
              "src": "346:76:1"
            },
            {
              "body": {
                "id": 125,
                "nodeType": "Block",
                "src": "470:253:1",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 98,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 95,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "489:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 96,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "src": "489:9:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 97,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "501:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "489:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "6e6f7420656e6f7567687420424e4220746f2062757920746f6b656e73",
                          "id": 99,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "504:31:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_71dbf560328e1d5f8cf75aeb6374b5deb3598eb2721e18640565d033c495d3fe",
                            "typeString": "literal_string \"not enought BNB to buy tokens\""
                          },
                          "value": "not enought BNB to buy tokens"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_71dbf560328e1d5f8cf75aeb6374b5deb3598eb2721e18640565d033c495d3fe",
                            "typeString": "literal_string \"not enought BNB to buy tokens\""
                          }
                        ],
                        "id": 94,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "481:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 100,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "481:55:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 101,
                    "nodeType": "ExpressionStatement",
                    "src": "481:55:1"
                  },
                  {
                    "assignments": [
                      103
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 103,
                        "mutability": "mutable",
                        "name": "amountToTransfer",
                        "nodeType": "VariableDeclaration",
                        "scope": 125,
                        "src": "547:21:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 102,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "547:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 108,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 107,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 104,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "571:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 105,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "src": "571:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "id": 106,
                        "name": "tokensPerBnb",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "583:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "571:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "547:48:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 112,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "621:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 113,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "621:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 114,
                          "name": "amountToTransfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 103,
                          "src": "633:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 109,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 68,
                          "src": "606:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Token_$59",
                            "typeString": "contract Token"
                          }
                        },
                        "id": 111,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "transfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 392,
                        "src": "606:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 115,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "606:44:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 116,
                    "nodeType": "ExpressionStatement",
                    "src": "606:44:1"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 118,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "676:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 119,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "676:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 120,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "687:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "687:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 122,
                          "name": "amountToTransfer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 103,
                          "src": "698:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 117,
                        "name": "BuyTokens",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 91,
                        "src": "666:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256,uint256)"
                        }
                      },
                      "id": 123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "666:49:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 124,
                    "nodeType": "EmitStatement",
                    "src": "661:54:1"
                  }
                ]
              },
              "functionSelector": "d0febe4c",
              "id": 126,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "buyTokens",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 92,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "452:2:1"
              },
              "returnParameters": {
                "id": 93,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "470:0:1"
              },
              "scope": 163,
              "src": "434:289:1",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 161,
                "nodeType": "Block",
                "src": "773:241:1",
                "statements": [
                  {
                    "assignments": [
                      132
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 132,
                        "mutability": "mutable",
                        "name": "ownerBalance",
                        "nodeType": "VariableDeclaration",
                        "scope": 161,
                        "src": "780:20:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 131,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "780:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 138,
                    "initialValue": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 135,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967268,
                            "src": "811:4:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Vendor_$163",
                              "typeString": "contract Vendor"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Vendor_$163",
                              "typeString": "contract Vendor"
                            }
                          ],
                          "id": 134,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "803:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 133,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "803:7:1",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "803:13:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 137,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "src": "803:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "780:44:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 142,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 140,
                            "name": "ownerBalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 132,
                            "src": "839:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 141,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "854:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "839:16:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4f776e65722f436f6e747261637420686173206e6f2062616c616e636520746f207769746864726177",
                          "id": 143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "857:43:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_86ba3b0f4f62bd721a8f719b94af1a4a0548c44fa3563a8126e9956a66a1a466",
                            "typeString": "literal_string \"Owner/Contract has no balance to withdraw\""
                          },
                          "value": "Owner/Contract has no balance to withdraw"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_86ba3b0f4f62bd721a8f719b94af1a4a0548c44fa3563a8126e9956a66a1a466",
                            "typeString": "literal_string \"Owner/Contract has no balance to withdraw\""
                          }
                        ],
                        "id": 139,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "831:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 144,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "831:70:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 145,
                    "nodeType": "ExpressionStatement",
                    "src": "831:70:1"
                  },
                  {
                    "assignments": [
                      147,
                      null
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 147,
                        "mutability": "mutable",
                        "name": "sent",
                        "nodeType": "VariableDeclaration",
                        "scope": 161,
                        "src": "909:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 146,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "909:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "visibility": "internal"
                      },
                      null
                    ],
                    "id": 155,
                    "initialValue": {
                      "arguments": [
                        {
                          "hexValue": "",
                          "id": 153,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "959:2:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                              "typeString": "literal_string \"\""
                            }
                          ],
                          "expression": {
                            "expression": {
                              "id": 148,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967281,
                              "src": "922:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 149,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "922:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 150,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "call",
                          "nodeType": "MemberAccess",
                          "src": "922:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                          }
                        },
                        "id": 152,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "names": [
                          "value"
                        ],
                        "nodeType": "FunctionCallOptions",
                        "options": [
                          {
                            "id": 151,
                            "name": "ownerBalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 132,
                            "src": "945:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "src": "922:36:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 154,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "922:40:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "tuple(bool,bytes memory)"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "908:54:1"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 157,
                          "name": "sent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 147,
                          "src": "977:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4661696c656420746f2073656e642062616c616e6365",
                          "id": 158,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "983:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_0914e465c47bdec0afb499033b41d344c1215550b350b2c9c8c3024884b145bc",
                            "typeString": "literal_string \"Failed to send balance\""
                          },
                          "value": "Failed to send balance"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_0914e465c47bdec0afb499033b41d344c1215550b350b2c9c8c3024884b145bc",
                            "typeString": "literal_string \"Failed to send balance\""
                          }
                        ],
                        "id": 156,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "969:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 159,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "969:39:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 160,
                    "nodeType": "ExpressionStatement",
                    "src": "969:39:1"
                  }
                ]
              },
              "functionSelector": "3ccfd60b",
              "id": 162,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 129,
                  "modifierName": {
                    "id": 128,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 210,
                    "src": "764:9:1"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "764:9:1"
                }
              ],
              "name": "withdraw",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 127,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "754:2:1"
              },
              "returnParameters": {
                "id": 130,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "773:0:1"
              },
              "scope": 163,
              "src": "737:277:1",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 164,
          "src": "148:869:1"
        }
      ],
      "src": "33:984:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.0+commit.c7dfd78e.Emscripten.clang"
    },
    "networks": {
      "4447": {
        "events": {},
        "links": {},
        "address": "0x2Ec989BA9E845734D01560a6FA499E3308689DAB",
        "transactionHash": "0xf751de2cd7d6a9f3276efba241a49ade1f26a2e63cee975c858db006f6d8a281"
      }
    },
    "schemaVersion": "3.4.4",
    "updatedAt": "2022-04-07T11:50:41.502Z",
    "devdoc": {
      "kind": "dev",
      "methods": {
        "owner()": {
          "details": "Returns the address of the current owner."
        },
        "renounceOwnership()": {
          "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
        },
        "transferOwnership(address)": {
          "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
        }
      },
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }];

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
chai.expect();

  contract("Vendor",([deployer])=>{

    before(async() => {
    vendor = await Vendor.deployed();
    vendorAddress = await vendor.address;
    contractVendor = new web3.eth.Contract(abiVendor,vendorAddress);
    });

    describe('deployment',async()=>{
        it('deploys successfully', async ()=> {
            assert.notEqual(vendorAddress, 0x0)
            assert.notEqual(vendorAddress, '')
            assert.notEqual(vendorAddress, null)
            assert.notEqual(vendorAddress, undefined)
        });
    });

    describe('Vendor balance',async()=>{
        it("Initial Vendor balance successfully",async()=>{
            balanceVendor = await contractToken.methods.balanceOf(vendorAddress).call();
            assert.equal(web3.utils.fromWei(balanceVendor),0);
        });
        it("Top up Vendor.sol with ETH successfully",async()=>{
            assert
        });
        it("Mint 20% of total supply",async()=>{
            balanceVendor = await contractToken.methods.balanceOf(vendorAddress).call();
            assert.equal(web3.utils.fromWei(balanceVendor),0);
        });
    });
  });
