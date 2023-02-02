const { network } = require("hardhat")
const developmentChains = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

// Be sure to check out the hardhat-deploy examples to use UUPS proxies!
// https://github.com/wighawag/template-ethereum-contracts

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    log("-------------------")

    const box = await deploy("Box", {
        from: deployer,
        args: [],
        log: true,
        // waitConfirmations: network.config.blockConfirmations,
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy",
            viaAdminContract: {
                name: "BoxProxyAdmin",
                artifact: "BoxProxyAdmin",
            },
        },
    })
    // if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    //     log("Verifying...")
    //     const boxAddress = (await ethers.getContract("Box_Implementation")).address
    //     await verify(boxAddress, [])
    // }
    log("----------------------------------------------------")
}
module.exports.tags = ["all", "box"]
