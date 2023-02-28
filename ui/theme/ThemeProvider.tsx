import React from 'react'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'
import { ThemeProvider as InternalThemeProvider } from 'theme-ui'

import { darkTheme } from '.'
import ModalProvider from './ModalProvider'

type Props = {
  children: React.ReactNode
  isDarkMode?: boolean
  isLightMode?: boolean
}

export default function ThemeProvider({ children }: Props) {
  const theme = darkTheme

  useEffect(() => {
    injectStyle()
  }, [])

  return (
    <InternalThemeProvider theme={theme}>
      <ModalProvider>
        {children}
        <ToastContainer closeButton={false} />
      </ModalProvider>
    </InternalThemeProvider>
  )
}
