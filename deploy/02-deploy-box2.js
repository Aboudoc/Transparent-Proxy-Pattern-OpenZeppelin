const { network } = require("hardhat")
const developmentChains = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

// Be sure to check out the hardhat-deploy examples to use UUPS proxies!
// https://github.com/wighawag/template-ethereum-contracts

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const boxv2 = await deploy("BoxV2", {
        from: deployer,
        args: [],
        logs: true,
        waitConfirmations: network.config.blockConfirmations,
    })
}
