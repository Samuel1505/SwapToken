import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
    const ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
    const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"; // USDC
    const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const TOKEN_HOLDER = "0xf584F8728B874a6a5c7A8d4d387C9aae9172D621";

    await helpers.impersonateAccount(TOKEN_HOLDER);
    const impersonatedSigner = await ethers.getSigner(TOKEN_HOLDER);

    const amountADesired = ethers.parseUnits("100", 6); // 1 million USDC
    const amountBDesired = ethers.parseUnits("100", 18); // 1 million DAI
    const amountAMin = ethers.parseUnits("90", 6); // 99.99% of amountADesired
    const amountBMin = ethers.parseUnits("90", 18); // 99.99% of amountBDesired
    const to = impersonatedSigner.address;
    const deadline = Math.floor(Date.now() / 1000) + (60 * 10);

    const USDC_Contract = await ethers.getContractAt("IERC20", USDC, impersonatedSigner);
    const DAI_Contract = await ethers.getContractAt("IERC20", DAI, impersonatedSigner);

    const ROUTER = await ethers.getContractAt("IUniswapV2Router", ROUTER_ADDRESS, impersonatedSigner);
    
    await USDC_Contract.approve(ROUTER, amountADesired); 
        
    await DAI_Contract.approve(ROUTER, amountBDesired); 

    const usdcBal = await USDC_Contract.balanceOf(impersonatedSigner.address);

    const daiBal = await DAI_Contract.balanceOf(impersonatedSigner.address);

    console.log("usdc balance before swap", Number(usdcBal));
    console.log("dai balance before swap", Number(daiBal));
    
    const liqTx = await ROUTER.addLiquidity(
        USDC,
        DAI,
        amountADesired,
        amountBDesired,
        amountAMin,
        amountBMin,
        impersonatedSigner,
        deadline
    );
    await liqTx.wait();

    console.log("usdcBalAfter", Number(usdcBal));
    console.log("usdcBalAfter", Number(daiBal));
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });