export enum FetchId {
  // pages
  VaultsTableData = 'VaultsTableData',
  AdminPageData = 'AdminPageData',

  // accounts
  AccountENS = 'AccountENS',
  AccountEthBalance = 'AccountEthBalance',
  AccountIsSmartContractWallet = 'AccountIsSmartContractWallet',
  AccountScreenTransaction = 'AccountScreenTransaction',
  AccountBalances = 'AccountBalances',
  AccountLyraBalances = 'AccountLyraBalances',

  // portfolio
  PortfolioPageData = 'PortfolioPageData',
  PortfolioMarketsTableData = 'PortfolioMarketsTableData',
  PortfolioOpenPositions = 'PortfolioOpenPositions',
  PortfolioUserProfitLossHistory = 'PortfolioUserProfitLossHistory',

  // trade
  TradePageData = 'TradePageData',

  // position
  PositionPageData = 'PositionPageData',
  PositionIVHistory = 'PositionIVHistory',
  PositionPriceHistory = 'PositionPriceHistory',

  // vaults
  VaultPageData = 'VaultPageData',
  VaultStats = 'VaultStats',
  VaultAggregateTVL = 'VaultAggregateTVL',
  VaultAggregateStats = 'VaultAggregateStats',

  // faucet
  FaucetPageData = 'FaucetPageData',

  // rewards
  // TODO: @dappbeast simplify account hooks
  RewardsPageData = 'RewardsPageData',
  RewardsArrakisPageData = 'RewardsArrakisPageData',
  AccountRewardEpochs = 'AccountRewardEpochs',
  LatestRewardEpoch = 'LatestRewardEpoch',
  ArrakisOptimismAccount = 'ArrakisOptimismAccount',
  ArrakisStaking = 'ArrakisStaking',
  CamelotStaking = 'CamelotStaking',
  ClaimableStakingRewards = 'ClaimableStakingRewards',
  TokenSupply = 'TokenSupply',
  NetworkTradingVolume = 'NetworkTradingVolume',
  VelodromeStaking = 'VelodromeStaking',

  // shared
  PositionHistory = 'PositionHistory',
  TradeHistory = 'TradeHistory',
  SpotPriceHistory = 'SpotPriceHistory',

  // admin
  AdminMultiSigTransaction = 'AdminMultiSigTransaction',
  AdminMultiSigTransactionCount = 'AdminMultiSigTransactionCount',
  AdminMultiSigTransactionIds = 'AdminMultiSigTransactionIds',

  // governance
  VoteIndexPageData = 'VoteIndexPageData',
  VoteDetailsPageData = 'VoteDetailsPageData',
  ProposalCreatedEventData = 'ProposalCreatedEventData',
  ProposalCreatedEventsData = 'ProposalCreatedEventsData',
  ShortExecutorData = 'ShortExecutorData',
  LyraGovernanceData = 'LyraGovernanceData',
  CreateProposal = 'CreateProposal',
}
