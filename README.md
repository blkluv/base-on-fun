# Base on Fun: Token Factory on Base Network

![Base Network](https://img.shields.io/badge/Network-Base-0052FF)
![Solidity](https://img.shields.io/badge/Solidity-0.8.20-363636)
![License](https://img.shields.io/badge/License-MIT-blue)

A comprehensive platform for launching and trading custom ERC20 tokens on the Base Network with automated Uniswap V3 liquidity pool creation, creator fee mechanisms, and anti-rug protection.

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Smart Contract Architecture](#-smart-contract-architecture)
- [Prerequisites](#-prerequisites)
- [Development Environment Setup](#-development-environment-setup)
- [Contract Deployment](#-contract-deployment)
- [Frontend Integration](#-frontend-integration)
- [Backend Services](#-backend-services)
- [Security Considerations](#-security-considerations)
- [Gas Optimization](#-gas-optimization)
- [Testing](#-testing)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Overview

Base on Fun is an educational project demonstrating how to build a token factory and trading platform on the Base Network. It allows users to create custom ERC20 tokens with just a few clicks, automatically sets up liquidity pools, and provides optional creator fee mechanisms.

### Why Base Network?

Base is a secure, low-cost, developer-friendly Ethereum L2 built to bring the next billion users onchain. It offers:

- Low transaction fees
- Fast confirmation times
- Ethereum security guarantees
- Coinbase ecosystem integration
- Growing developer community

## ✨ Features

- **Token Creation**:
  - Standard ERC20 tokens
  - "Clanker" tokens with 0.4% creator fees on transfers
  - Customizable token name, symbol, and supply
  - Metadata storage for token descriptions and images

- **Liquidity Management**:
  - Automatic Uniswap V3 liquidity pool creation
  - Permanently locked initial liquidity
  - Anti-rug pull protection

- **Platform Features**:
  - Token registry for tracking and verification
  - Platform fee of 0.5% on token creation
  - Creator earnings from trading volume
  - Token discovery and trading interface

- **Technical Features**:
  - OpenZeppelin contracts v5.2.0 integration
  - Gas-optimized implementations
  - Comprehensive testing suite
  - Verified contract source code

## 🏗️ Smart Contract Architecture

The platform consists of several interconnected smart contracts:

```mermaid
graph TD
    A[TokenFactory] --> B[ClankerToken]
    A --> C[StandardToken]
    B --> D[LiquidityPool]
    C --> D
    D --> E[FeeDistributor]
    A --> F[TokenRegistry]
    F --> G[TokenMetadata]
