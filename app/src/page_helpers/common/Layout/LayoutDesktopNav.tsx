import DropdownButton from '@lyra/ui/components/Button/DropdownButton'
import DropdownButtonListItem from '@lyra/ui/components/Button/DropdownButtonListItem'
import DropdownIconButton from '@lyra/ui/components/Button/DropdownIconButton'
import Flex from '@lyra/ui/components/Flex'
import { IconType } from '@lyra/ui/components/Icon'
import Image from '@lyra/ui/components/Image'
import Link from '@lyra/ui/components/Link'
import BaseLink from '@lyra/ui/components/Link/BaseLink'
import useIsDarkMode from '@lyra/ui/hooks/useIsDarkMode'
import React, { useCallback, useState } from 'react'

import { DESKTOP_HEADER_NAV_HEIGHT, DESKTOP_LAYOUT_LARGE_WIDTH } from '@/app/constants/layout'
import {
  KWENTA_DASHBOARD_URL,
  KWENTA_EXCHANGE_URL,
  KWENTA_LEADERBOARD_URL,
  KWENTA_MARKETS_URL,
} from '@/app/constants/links'
import { LogEvent } from '@/app/constants/logEvents'
import { PageId } from '@/app/constants/pages'
import AccountButton from '@/app/containers/common/AccountButton'
import useNetwork from '@/app/hooks/account/useNetwork'
import getAssetSrc from '@/app/utils/getAssetSrc'
import { getDefaultMarket } from '@/app/utils/getDefaultMarket'
import getPagePath from '@/app/utils/getPagePath'
import logEvent from '@/app/utils/logEvent'

import LayoutMoreDropdownListItems from './LayoutMoreDropdownListItems'
import LayoutPrivacyModal from './LayoutPrivacyModal'

const SIDE_WIDTH = 320
const LOGO_SIDE_WIDTH = 160

export default function LayoutDesktopNav(): JSX.Element {
  const [isDarkMode] = useIsDarkMode()
  const network = useNetwork()

  const [isKwentaOpen, setKwentaOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const onMoreClose = useCallback(() => setIsMoreOpen(false), [])
  const onKwentaClose = useCallback(() => setKwentaOpen(false), [])

  return (
    <Flex
      flexDirection="column"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: DESKTOP_HEADER_NAV_HEIGHT,
        zIndex: 'topNavBar',
      }}
    >
      <Flex
        height={DESKTOP_HEADER_NAV_HEIGHT}
        sx={{
          backdropFilter: 'blur(50px)',
        }}
        justifyContent="center"
      >
        <Flex width="100%" px={12} maxWidth={DESKTOP_LAYOUT_LARGE_WIDTH}>
          <Flex alignItems="center" width={LOGO_SIDE_WIDTH}>
            <BaseLink display="flex" alignItems="center" href={KWENTA_MARKETS_URL}>
              <Image src={getAssetSrc('/images/logo.svg')} height={20} />
            </BaseLink>
          </Flex>
          <Flex flexGrow={1} alignItems={'center'} justifyContent={'flex-start'}>
            <Link mx={4} href={KWENTA_DASHBOARD_URL} textVariant="bodyMedium" variant="secondary">
              Dashboard
            </Link>
            <Link
              mx={6}
              mr={8}
              href={KWENTA_MARKETS_URL}
              textVariant="bodyMedium"
              variant="secondary"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              Futures
              <Image src={getAssetSrc('/images/logo-yellow.svg')} height={12} ml={1} />
            </Link>
            <DropdownButton
              isOpen={isKwentaOpen}
              onClose={onKwentaClose}
              onClick={() => setKwentaOpen(true)}
              label="Options"
              sx={{ width: '100px' }}
            >
              <DropdownButtonListItem
                label="Portfolio"
                href={getPagePath({ page: PageId.Portfolio })}
                onClick={() => logEvent(LogEvent.NavPortfolioTabClick)}
              />
              <DropdownButtonListItem
                label="Trade"
                href={getPagePath({
                  page: PageId.Trade,
                  network,
                  marketAddressOrName: getDefaultMarket(network),
                })}
                onClick={() => logEvent(LogEvent.NavTradeTabClick)}
              />
              <DropdownButtonListItem
                label="Vaults"
                href={getPagePath({ page: PageId.VaultsIndex })}
                onClick={() => logEvent(LogEvent.NavVaultsTabClick)}
              />
              <DropdownButtonListItem
                label="Rewards"
                href={getPagePath({ page: PageId.RewardsIndex })}
                onClick={() => logEvent(LogEvent.NavStakeTabClick)}
              />
            </DropdownButton>
            <Link textVariant="bodyMedium" variant="secondary" mx={6} ml={8} href={KWENTA_EXCHANGE_URL}>
              Exchange
            </Link>
            <Link textVariant="bodyMedium" variant="secondary" mx={4} href={KWENTA_LEADERBOARD_URL}>
              Leaderboard
            </Link>
          </Flex>
          <Flex width={SIDE_WIDTH} justifyContent={'flex-end'} alignItems={'center'}>
            <AccountButton mr={2} />
            <DropdownIconButton
              isOpen={isMoreOpen}
              onClose={onMoreClose}
              onClick={() => setIsMoreOpen(true)}
              icon={IconType.MoreHorizontal}
              variant={isDarkMode ? 'static' : 'white'}
            >
              <LayoutMoreDropdownListItems onClose={onMoreClose} onClickPrivacy={() => setIsPrivacyOpen(true)} />
            </DropdownIconButton>
            <LayoutPrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
