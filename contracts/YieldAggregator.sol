// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "@aave/periphery-v3/contracts/misc/interfaces/IWrappedTokenGatewayV3.sol";
import "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import "@aave/core-v3/contracts/interfaces/IAToken.sol";
import "@aave/core-v3/contracts/interfaces/IPool.sol";
import "hardhat/console.sol";

contract YieldAggregator {
    address poolProviderAddress = 0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D;
    address WETHGateWayAddress = 0xd5B55D3Ed89FDa19124ceB5baB620328287b915d;
    address aWETHAddress = 0x27B4692C93959048833f40702b22FE3578E77759;

    IPoolAddressesProvider poolAddressesProvider =
        IPoolAddressesProvider(poolAddressesProvider);

    IWrappedTokenGatewayV3 WETHGateway =
        IWrappedTokenGatewayV3(WETHGateWayAddress);

    IAToken aWETH = IAToken(aWETHAddress);

    address poolAddress;
    IPool pool;

    event suppliedETH(address user, uint256 amount);
    event suppliedERC20(address user, address asset, uint256 amount);
    event executedFlashLoan(address user, address balance);

    constructor() {
        poolAddress = poolAddressesProvider.getPool();
        pool = IPool(poolAddress);
    }

    function supplyETH() public payable {
        uint256 amount = msg.value;
        WETHGateway.depositETH{value: amount}(poolAddress, msg.sender, 0);
        emit suppliedETH(msg.sender, amount);
    }

    function supplyERC20(address asset) public payable {
        uint256 amount = msg.value;
        IERC20(asset).approve(poolAddress, amount);

        pool.supply(asset, amount, msg.sender, 0);
        emit suppliedERC20(msg.sender, asset, amount);
    }

    // function executeFlashLoan() public payable {
    //     console.log("About to execute Flash Loan");

    //     pool.flashLoanSimple();

    //     emit executedFlashLoan(msg.sender, address(msg.sender).balance);
    // }
}
