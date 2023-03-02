import Button from '@lyra/ui/components/Button'
import Card from '@lyra/ui/components/Card'
import CardSection from '@lyra/ui/components/Card/CardSection'
import { IconType } from '@lyra/ui/components/Icon'
import Image from '@lyra/ui/components/Image'
import Text from '@lyra/ui/components/Text'
import React from 'react'

import { PORTFOLIO_CARD_HEIGHT } from '@/app/constants/layout'
import { PageId } from '@/app/constants/pages'
import useNetwork from '@/app/hooks/account/useNetwork'
import getAssetSrc from '@/app/utils/getAssetSrc'
import { getDefaultMarket } from '@/app/utils/getDefaultMarket'
import getPagePath from '@/app/utils/getPagePath'

function PortfolioOnboardingCard() {
  const network = useNetwork()

  return (
    <Card height={PORTFOLIO_CARD_HEIGHT}>
      <CardSection justifyContent="center" alignItems="center" height="100%" width="100%">
        <Image src={getAssetSrc('/images/logo.svg')} mb={4} height={25} width={157} />
        <Text variant="title" mb={2}>
          Welcome to Kwenta
        </Text>
        <Text variant="heading" color="secondaryText" mb={4}>
          Powered by
          <Image src={getAssetSrc('/images/logo.png')} ml={2} mr={2} pt={2} height={25} />
          Lyra
        </Text>
        <Text textAlign="center" variant="secondary" color="secondaryText" mb={6}>
          Trade, provide liquidity and earn rewards with the Lyra Protocol
        </Text>
        <Button
          href={getPagePath({
            page: PageId.Trade,
            network: network,
            marketAddressOrName: getDefaultMarket(network),
          })}
          width={200}
          size="lg"
          variant="primary"
          label="Start Trading"
          rightIcon={IconType.ArrowRight}
        />
      </CardSection>
    </Card>
  )
}

export default PortfolioOnboardingCard
