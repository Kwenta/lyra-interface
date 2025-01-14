import React from 'react'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'
import { ThemeProvider as InternalThemeProvider } from 'theme-ui'

import { darkTheme, getThemePreset, lightTheme } from '.'

type Props = {
  children: React.ReactNode
  isDarkMode?: boolean
  isLightMode?: boolean
}

export default function ThemeProvider({ children, isDarkMode = true, isLightMode = false }: Props) {
  const theme = isDarkMode ? darkTheme : isLightMode ? lightTheme : getThemePreset(true)

  useEffect(() => {
    injectStyle()
  }, [])

  return (
    <InternalThemeProvider theme={theme}>
      {children}
      <ToastContainer closeButton={false} />
    </InternalThemeProvider>
  )
}
