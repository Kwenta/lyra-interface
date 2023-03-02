import { TextElement } from '@lyra/ui/components/Text'
import useIsMobile from '@lyra/ui/hooks/useIsMobile'
import React from 'react'

import PageDesktop from './PageDesktop'
import PageMobile from './PageMobile'

type Props = {
  children?: React.ReactNode
  showBackButton?: boolean
  backHref?: string
  desktopRightColumn?: React.ReactNode
  header?: React.ReactNode
  desktopHeader?: React.ReactNode
  mobileHeader?: React.ReactNode
  mobileCollapsedHeader?: string | TextElement | (TextElement | null)[] | null
  noHeaderPadding?: boolean
}

export default function Page({
  children,
  showBackButton,
  backHref,
  header,
  desktopRightColumn,
  desktopHeader,
  mobileHeader,
  mobileCollapsedHeader,
  noHeaderPadding = false,
}: Props): JSX.Element {
  const isMobile = useIsMobile()
  return isMobile ? (
    <PageMobile
      backHref={backHref}
      showBackButton={showBackButton}
      header={mobileHeader ?? header}
      collapsedHeader={mobileCollapsedHeader}
    >
      {children}
    </PageMobile>
  ) : (
    <PageDesktop
      backHref={backHref}
      showBackButton={showBackButton}
      header={desktopHeader ?? header}
      rightColumn={desktopRightColumn}
      noHeaderPadding={noHeaderPadding}
    >
      {children}
    </PageDesktop>
  )
}
