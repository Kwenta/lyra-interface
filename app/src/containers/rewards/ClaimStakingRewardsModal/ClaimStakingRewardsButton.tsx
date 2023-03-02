import ButtonShimmer from '@lyra/ui/components/Shimmer/ButtonShimmer'
import React from 'react'

import { TransactionType } from '@/app/constants/screen'
import useTransaction from '@/app/hooks/account/useTransaction'
import useWalletAccount from '@/app/hooks/account/useWalletAccount'
import withSuspense from '@/app/hooks/data/withSuspense'
import useClaimableStakingRewards, {
  useMutateClaimableStakingRewards,
} from '@/app/hooks/rewards/useClaimableStakingRewards'
import { lyraOptimism } from '@/app/utils/lyra'

import TransactionButton from '../../common/TransactionButton'

type Props = {
  onClaim?: () => void
}

const ClaimButton = withSuspense(
  ({ onClaim }: Props) => {
    const account = useWalletAccount()
    const execute = useTransaction('ethereum')
    const mutateClaimableBalance = useMutateClaimableStakingRewards()
    const claimableBalances = useClaimableStakingRewards()

    const handleStkLyraClaim = async () => {
      if (!account) {
        return
      }
      const tx = await lyraOptimism.claimStakingRewards(account)
      await execute(tx, {
        onComplete: () => {
          mutateClaimableBalance()
          if (onClaim) {
            onClaim()
          }
        },
        onError: () => {
          mutateClaimableBalance()
        },
      })
    }

    return (
      <TransactionButton
        transactionType={TransactionType.ClaimStakedLyraRewards}
        network="ethereum"
        label="Claim"
        isDisabled={claimableBalances.isZero()}
        onClick={async () => await handleStkLyraClaim()}
      />
    )
  },
  () => <ButtonShimmer size="lg" />
)

export default ClaimButton
