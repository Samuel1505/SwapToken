# Swaptoken (IUniswapV2Router Interface)

## Overview
The `IUniswapV2Router` interface provides essential functions for interacting with the Uniswap V2 decentralized exchange. This interface allows users to swap tokens, add liquidity, and retrieve pricing information from the Uniswap protocol.

## Features
- **Token Swaps**: Allows swapping between ERC-20 tokens and ETH.
- **Liquidity Management**: Enables adding liquidity to Uniswap pools.
- **Price Optimization**: Ensures minimal slippage by allowing setting price limits.

## Contract Details
- **Solidity Version**: `^0.8.9`
- **License**: `UNLICENSED`
- **Functions**:
  - `swapExactTokensForTokens`
  - `swapTokensForExactTokens`
  - `swapTokensForExactETH`
  - `addLiquidity`

## Functions

### 1. `swapExactTokensForTokens`
Swaps an exact amount of input tokens for as many output tokens as possible.
```solidity
function swapExactTokensForTokens(
    uint amountIn,
    uint amountOutMin,
    address[] calldata path,
    address to,
    uint deadline
) external returns (uint[] memory amounts);
```
- **Parameters:**
  - `amountIn`: Amount of input tokens.
  - `amountOutMin`: Minimum output tokens expected.
  - `path`: Token addresses for swap route.
  - `to`: Recipient address.
  - `deadline`: Time until the transaction expires.
- **Returns:**
  - `amounts`: Array of output token amounts.

### 2. `swapTokensForExactTokens`
Swaps as few input tokens as possible for an exact number of output tokens.
```solidity
function swapTokensForExactTokens(
    uint amountOut,
    uint amountInMax,
    address[] calldata path,
    address to,
    uint deadline
) external returns (uint[] memory amounts);
```
- **Parameters:**
  - `amountOut`: Exact amount of output tokens desired.
  - `amountInMax`: Maximum input tokens to be spent.
  - `path`: Token addresses for swap route.
  - `to`: Recipient address.
  - `deadline`: Time until the transaction expires.
- **Returns:**
  - `amounts`: Array of input token amounts.

### 3. `swapTokensForExactETH`
Swaps as few input tokens as possible for an exact amount of ETH.
```solidity
function swapTokensForExactETH(
    uint amountOut,
    uint amountInMax,
    address[] calldata path,
    address to,
    uint deadline
) external returns (uint[] memory amounts);
```
- **Parameters:**
  - `amountOut`: Exact amount of ETH desired.
  - `amountInMax`: Maximum input tokens to be spent.
  - `path`: Token addresses for swap route.
  - `to`: Recipient address.
  - `deadline`: Time until the transaction expires.
- **Returns:**
  - `amounts`: Array of input token amounts.

### 4. `addLiquidity`
Adds liquidity to a Uniswap V2 pool.
```solidity
function addLiquidity(
    address tokenA,
    address tokenB,
    uint amountADesired,
    uint amountBDesired,
    uint amountAMin,
    uint amountBMin,
    address to,
    uint deadline
) external returns (uint amountA, uint amountB, uint liquidity);
```
- **Parameters:**
  - `tokenA`: First token in the pair.
  - `tokenB`: Second token in the pair.
  - `amountADesired`: Desired amount of `tokenA`.
  - `amountBDesired`: Desired amount of `tokenB`.
  - `amountAMin`: Minimum amount of `tokenA` to be added.
  - `amountBMin`: Minimum amount of `tokenB` to be added.
  - `to`: Recipient of the liquidity tokens.
  - `deadline`: Time until the transaction expires.
- **Returns:**
  - `amountA`: Actual amount of `tokenA` added.
  - `amountB`: Actual amount of `tokenB` added.
  - `liquidity`: Amount of liquidity tokens received.

## Security Considerations
- Ensure proper approval is granted before executing swaps.
- Use reasonable slippage limits to prevent losses due to price fluctuations.
- Always verify the `path` to avoid unnecessary intermediaries.

## License
This interface is provided as `UNLICENSED`. It is designed for integration into larger DeFi applications and smart contracts.

