import { AccountRewardEpoch, Market, Network, RewardEpochTokenAmount } from '@lyrafinance/lyra-js'

import { ONE_BN, UNIT, ZERO_ADDRESS, ZERO_BN } from '../constants/bn'
import { Vault } from '../constants/vault'
import { EMPTY_LYRA_BALANCES } from '../hooks/account/useAccountLyraBalances'
import getAverageCostPerLPToken from '../hooks/vaults/getAverageCostPerLPToken'
import fromBigNumber from './fromBigNumber'
import getEmptyMarketBalances from './getEmpyMarketBalances'
import getLyraSDK from './getLyraSDK'

const EMPTY_APY: RewardEpochTokenAmount[] = []

const fetchVault = async (network: Network, market: Market, walletAddress?: string): Promise<Vault> => {
  const lyra = getLyraSDK(network)
  const account = lyra.account(walletAddress ?? ZERO_ADDRESS)

  const fetchLyraBalances = async () => (account ? account.lyraBalances() : EMPTY_LYRA_BALANCES)

  const [marketLiquidity, globalRewardEpoch, balances, lyraBalances, deposits, withdrawals] = await Promise.all([
    market.liquidity(),
    lyra.latestGlobalRewardEpoch(),
    account.balances(),
    fetchLyraBalances(),
    lyra.deposits(market.address, account.address),
    lyra.withdrawals(market.address, account.address),
  ])

  const marketBalances =
    balances.find(balance => balance.market.isEqual(market.address)) ?? getEmptyMarketBalances(ZERO_ADDRESS, market)

  const pendingDeposits = deposits.filter(d => d.isPending)
  const pendingWithdrawals = withdrawals.filter(w => w.isPending)

  let accountRewardEpoch: AccountRewardEpoch | null = null
  if (walletAddress && globalRewardEpoch) {
    accountRewardEpoch = await globalRewardEpoch.accountRewardEpoch(walletAddress)
  }

  const minApy = globalRewardEpoch?.minVaultApy(market.address) ?? EMPTY_APY
  const maxApy = globalRewardEpoch?.maxVaultApy(market.address) ?? EMPTY_APY
  const apy = accountRewardEpoch?.vaultApy(market.address) ?? minApy
  const apyMultiplier = accountRewardEpoch?.vaultApyMultiplier(market.address) ?? 1

  const liquidityToken = marketBalances.liquidityToken

  const tvl = fromBigNumber(marketLiquidity.tvl)
  const liquidityTokenBalanceValue = fromBigNumber(marketLiquidity.tokenPrice) * fromBigNumber(liquidityToken.balance)

  const utilization = marketLiquidity.utilization

  const avgCostPerToken = getAverageCostPerLPToken(deposits, withdrawals)
  const avgValue = avgCostPerToken.mul(liquidityToken.balance).div(UNIT)
  const pnl = liquidityTokenBalanceValue - fromBigNumber(avgValue)
  const pnlPercent =
    avgCostPerToken.gt(0) && pnl !== 0 ? marketLiquidity.tokenPrice.mul(UNIT).div(avgCostPerToken).sub(ONE_BN) : ZERO_BN
  return {
    market,
    marketLiquidity,
    marketBalances,
    lyraBalances,
    globalRewardEpoch,
    accountRewardEpoch,
    tvl,
    liquidityTokenBalanceValue,
    liquidityToken,
    minApy,
    maxApy,
    apy,
    apyMultiplier,
    utilization,
    pendingDeposits,
    pendingWithdrawals,
    allDeposits: deposits,
    allWithdrawals: withdrawals,
    pnl,
    pnlPercentage: fromBigNumber(pnlPercent),
  }
}

export default fetchVault
