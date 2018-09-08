pragma solidity ^0.4.24;

import "./ElectusProtocol.sol";
import "./Protocol/IElectusProtocol.sol";


contract ERC1261MetaData is ElectusProtocol, IERC1261Metadata {

    string internal _orgName;
    string internal _orgSymbol;
    
    constructor() public {
        supportedInterfaces[0x1234] = true;
    }

    function name() external view returns (string) {
        return _orgName;
    }
    
    function symbol() external view returns (string){
        return _orgSymbol;
    }
}