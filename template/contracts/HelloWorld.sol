// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.0;

contract HelloWorld {
    string note = "Hello World :)";

    function getNote() public view returns (string memory) {
        return note;
    }
}
