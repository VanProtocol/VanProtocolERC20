const BigNumber = web3.utils.BN;

const MyToken = artifacts.require("MyToken");

require('chai').use(require('chai-bignumber')(BigNumber)).should();


contract('MyToken', accounts => {
    const _name = 'WoongE';
    const _symbol = "WOE";
    const _decimals = 18;

    beforeEach(async function(){
       this.token = await MyToken.new(_name, _symbol, _decimals);


    });

    describe('token attributes', function(){
        it('has the correct name', async function(){
           const name = await this.token.name();
            name.should.equal('WoongE');

        });

        it('has the correct symbol', async function(){
            const symbol = await this.token.symbol();
            symbol.should.equal(_symbol);
        });

       
    });
})