require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remain million gloom prize swift vacant'; 
let testAccounts = [
"0xc3e6f7f1d6ebc9a9974838ddc220f7f14966cd91ac9ac0ddf9ac79a12bb40f46",
"0xf6d698a5749c50399160dbc800ada5da270752ac30453caa1ba5b8215d8c21b9",
"0x17652e9ea6d844abdf833b3cf426f86423709d7ca4a5ddb466bcbaae495ddded",
"0xd34c5caabb41b193d51e96b5b26b4826c46e836a528a0fa72bfe08efd2069799",
"0xa868c6e93d983c5dd966f03311ed84e48db3ddd7cacf456b9d05ff4161fdd70b",
"0x908119f7fb89fdedf1eccffe66a3b049e8a13a3833b195d73496cf07f2ac069e",
"0xf7fd663a702a8c39c48fafd69bd9c73a2425109eb04d928cfa977ce1c15e4f23",
"0x141f289ef54dcd12428ff8dc22643b4664c72b3cdd13b77e9b99bcbbfc1951ec",
"0x3c1525e7ed0589d8463a7f01a932328ff6494b7e3eb2b7af2a65bd56db53b72b",
"0x8000c1fa1046c02877767e64f2a3a683efbda88b2f3555cfcba5eb1a56c0f503"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
