import useThemeColor from '@lyra/ui/hooks/useThemeColor'
import React from 'react'
import { LayoutProps, MarginProps } from 'styled-system'

import Box from '../Box'
import { FlexProps } from '../Flex'

type Props = { backgroundColor?: string; bloomTop?: string; bloomLeft?: string } & MarginProps & LayoutProps & FlexProps

export default function Background({
  backgroundColor = 'background',
  bloomTop: top = '-40%',
  bloomLeft: left = '-33%',
  ...styleProps
}: Props): JSX.Element {
  const backgroundColorVal = useThemeColor(backgroundColor)
  return (
    <Box {...styleProps} width="100%" height="100%" sx={{ background: backgroundColorVal, ...styleProps.sx }}>
      <Box
        maxWidth="1420px"
        width="100%"
        height="100%"
        overflow="visible"
        sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
      >
        <Box
          width="1300px"
          height="1500px"
          sx={{
            position: 'absolute',
            // top,
            // left,
            background: '#131312',
            transform: `translate(${top}, ${left})`,
          }}
        />
        <Box
          width="1500px"
          height="1000px"
          sx={{
            position: 'absolute',
            background: '#131312',
            transform: 'rotate(-45deg) translate(10%, 40%)',
          }}
        />
      </Box>
    </Box>
  )
}
