require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name repeat night hour gesture fantasy equal genius'; 
let testAccounts = [
"0xf3fd19a9d01d94c54784f731af4301d31fdcc49793d499903a64f998b945840c",
"0x550a3cf72663a8e2a56bc7f99155c456d3d00a286fa91c5252c0eb302cfc3e09",
"0xf94dcc09a888ef7bd65c16fcd5b48b51b420c10854df8ae214fc9479b7e8760e",
"0xc424098bf70739a38da564d52f3228d5e0930155c805231adadd5f07332d80d6",
"0x228f727cfcafe3fd4f879652dc1ad84168375445907666d3c7a3c90252e3e413",
"0x2a5a2ad5c31aefcac2bea887392e3fbbafc1142044636e37e609c252a582d9c6",
"0xbc6f334c3486208c24817670ec3f518a3d75bf47f9ce90166a1b764508825a96",
"0x93c340fb7d244134ac7ed906b5089b16b19ccb559a0786b794054c1369705120",
"0x39b82637b782d0ccd454ca04ff80c42cdc91108d0f407c2e859788926479ed54",
"0x17c87132f46c3c93b3574a6bba590d33309969b6fc0266960f14de6fbc50b3b1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


