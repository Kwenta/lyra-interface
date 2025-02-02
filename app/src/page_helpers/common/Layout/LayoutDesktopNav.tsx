import DropdownIconButton from '@lyra/ui/components/Button/DropdownIconButton'
import Flex from '@lyra/ui/components/Flex'
import { IconType } from '@lyra/ui/components/Icon'
import Image from '@lyra/ui/components/Image'
import Link from '@lyra/ui/components/Link'
import BaseLink from '@lyra/ui/components/Link/BaseLink'
import React, { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { DESKTOP_HEADER_NAV_HEIGHT } from '@/app/constants/layout'
import { KWENTA_MARKETS_URL } from '@/app/constants/links'
import { LogEvent } from '@/app/constants/logEvents'
import TABS from '@/app/constants/tabs'
import AccountButton from '@/app/containers/common/AccountButton'
import getAssetSrc from '@/app/utils/getAssetSrc'
import { getNavPageFromPath } from '@/app/utils/getNavPageFromPath'
import logEvent from '@/app/utils/logEvent'

import LayoutMoreDropdownListItems from './LayoutMoreDropdownListItems'
import LayoutPrivacyModal from './LayoutPrivacyModal'

const SIDE_WIDTH = 420

export default function LayoutDesktopNav(): JSX.Element {
  const { pathname } = useLocation()
  const rootPage = getNavPageFromPath(pathname)

  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const onMoreClose = useCallback(() => setIsMoreOpen(false), [])

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
        <Flex width="100%" px={6}>
          <Flex alignItems="center" width={SIDE_WIDTH}>
            <BaseLink display="flex" alignItems="center" href={KWENTA_MARKETS_URL}>
              <Image src={getAssetSrc('/images/logo.svg')} height={20} />
            </BaseLink>
          </Flex>
          <Flex flexGrow={1} alignItems={'center'} justifyContent={'center'}>
            {TABS.map(tab => (
              <Link
                key={tab.path}
                mx={4}
                href={tab.path}
                variant="bodyMedium"
                color={rootPage !== tab.rootPageId ? 'secondaryText' : 'text'}
                onClick={() => logEvent(LogEvent.NavPortfolioTabClick)}
              >
                {tab.name}
              </Link>
            ))}
            <Link
              variant="bodyMedium"
              color="text"
              mx={4}
              href={KWENTA_MARKETS_URL}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              Futures
              <Image src={getAssetSrc('/images/link-light.svg')} height={12} ml={2} />
            </Link>
          </Flex>
          <Flex width={SIDE_WIDTH} justifyContent={'flex-end'} alignItems={'center'}>
            <AccountButton mr={2} />
            <DropdownIconButton
              isOpen={isMoreOpen}
              onClose={onMoreClose}
              onClick={() => setIsMoreOpen(true)}
              icon={IconType.MoreHorizontal}
              variant={'static'}
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
