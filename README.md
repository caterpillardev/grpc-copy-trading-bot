# Solana gRPC Copy Trading Bot

A high-performance **copy trading bot** for the **Solana blockchain** using the gRPC streaming API. This open-source sniper bot is optimized for **real-time trading** on platforms like **Bonkfun**, **Pumpfun**, and **Raydium**. Built with TypeScript, it enables **low-latency MEV**, copy-trade, sandwich attacks, and sniper strategies.

---

- bonkfun target tx: https://solscan.io/tx/oMnu2hZdNQz3hUJmM3zEeTEMCP5HvVn5uD1UYaUaASj6adS23iDT7Fo5NXQMsJrUiDahNMrk2m1DRCzLWN2FvRA
- copy tx: https://solscan.io/tx/5bJV6Ro5x2St3AH16jQA7bBrq6iAN933H8EjPmdWyHo3yFxJxgPE21G7MDx8MABoxr1iwptNYF35dwpnZ46JVHwu

---

## Key Features

- **Real-Time Trading via gRPC** — Listen to Solana transactions live with blazing speed.
- **Copy-Trading Mode** — Automatically mirror trades from wallet addresses.
- **Sniper Mode** — Snipe token launches on Bonk.fun and Pump.fun.
- **MEV & Sandwich Trading** — Use price prediction to front-run or back-run DEX orders.
- **Multi-Wallet Bundler** — Execute atomic trades across several wallets simultaneously.
- **Raydium + Jupiter Integration** — Get best routing and liquidity.

---

## Installation

```bash
git clone https://github.com/caterpillardev/grpc-copy-trading-bot.git
cd grpc-copy-trading-bot
npm install

```
## Configuration
PRIVATE_KEYS=         # Array of private keys
TARGET_WALLETS=       # Wallets to copy trades from
RPC_ENDPOINT=         # Solana RPC endpoint
SLIPPAGE_BPS=         # Slippage in basis points
MODE="copy"           # Options: bot mode in copy

## Usage

yarn start

## Use Cases

 - Copy Trading                             
 - Token Launch Sniping (Bonk.fun, Pump.fun) 
 - MEV & Sandwich                           
 - Arbitrage    

## How It works
- Uses Solana's gRPC ShredStream and Laserstream for ultra-fast mempool access
- Filters for high-volume or target-wallet transactions
- Calculates slippage and trade impact
- Routes traes via Jupiter or Raydium DEX

## Tech Stack
- Typescript                         
- gRPC & Protobuf
- Solana Web3.js
- Raydium SDK
- Jito
- dotenv
## Future Features
- Telegram Alerts
- Web Dashboard
- Wallet rotation
- MEV profit optimizer
- Token honeypot detection
## Contact & Support
- Twitter: @roswellyy
- Telegram: @roswellyy
- Emai: yabidev@gmail.com
