import React from 'react'

import RewardsIndexPageHelper from '@/app/page_helpers/RewardsIndexPageHelper'

import withSuspense from '../hooks/data/withSuspense'
import useRewardsPageData from '../hooks/rewards/useRewardsPageData'
import PageLoading from '../page_helpers/common/Page/PageLoading'
import filterNulls from '../utils/filterNulls'

// /rewards
const RewardsIndexPage = withSuspense(
  (): JSX.Element => {
    const { epochs, wethLyraStaking } = useRewardsPageData()
    const latestRewardEpochs = filterNulls(Object.values(epochs).map(epoch => epoch.latestRewardEpoch))
    return <RewardsIndexPageHelper latestRewardEpochs={latestRewardEpochs} wethLyraStaking={wethLyraStaking} />
  },
  () => <PageLoading />
)

export default RewardsIndexPage
