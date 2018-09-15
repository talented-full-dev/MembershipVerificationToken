var ERC1261Metadata = artifacts.require("./ERC1261Metadata.sol")

contract ("metadata test", function(accounts){
    beforeEach("setup", async()=>{
        metadata = await ERC1261Metadata.new("0x57616e636861696e", "0x57414e")
    })
    it("gets name of the organisation", async()=>{
        name = await metadata.name()
        assert.equal(web3.toAscii(name).replace(/\u0000/g, ""), "Wanchain", 32)
    })
    it("gets symbol of the organisation", async()=>{
        symbol = await metadata.symbol()
        assert.equal(web3.toAscii(symbol).replace(/\u0000/g, ""), "WAN", 32)
    })
})