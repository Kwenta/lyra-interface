import Background from '@lyra/ui/components/Background'
import React from 'react'

import LayoutDesktopNav from './LayoutDesktopNav'

type Props = {
  children?: React.ReactNode
}

export default function LayoutDesktop({ children }: Props): JSX.Element {
  return (
    <>
      <LayoutDesktopNav />
      <Background
        bg={'background'}
        mx="auto"
        sx={{
          position: 'fixed',
          top: '0',
          left: '0',
          pointerEvents: 'none',
          zIndex: -1,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {children}
    </>
  )
}
