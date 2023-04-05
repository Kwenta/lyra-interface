import { BigNumber } from '@ethersproject/bignumber'
import { Board } from '@lyrafinance/lyra-js'
import { useMemo } from 'react'

import { ITERATIONS, StrikeQuotesNullable } from '@/app/constants/contracts'
import { IGNORE_STRIKE_LIST } from '@/app/constants/ignore'
import getIsQuoteHidden from '@/app/utils/getIsQuoteHidden'

export default function useBoardQuotesSync(board: Board, size: BigNumber): StrikeQuotesNullable[] {
  const market = board.market()
  return useMemo(
    () =>
      board
        .quoteAllSync(size, { iterations: ITERATIONS })
        .strikes.map(({ callBid, callAsk, putBid, putAsk, strike }) => {
          const quoteStrikeId = strike.id
          const isIgnored = !!IGNORE_STRIKE_LIST.find(
            ({ strikeId, marketName, chain }) =>
              quoteStrikeId === strikeId &&
              market.name.toLowerCase() === marketName.toLowerCase() &&
              market.lyra.chain === chain
          )
          if (isIgnored) {
            return {
              callBid: null,
              callAsk: null,
              putBid: null,
              putAsk: null,
              strike,
            }
          }
          const hideCallBid = callBid.disabledReason
            ? getIsQuoteHidden(callBid.disabledReason) || callBid.premium.isZero()
            : false
          const hideCallAsk = callAsk.disabledReason
            ? getIsQuoteHidden(callAsk.disabledReason) || callAsk.premium.isZero()
            : false
          const hidePutBid = putBid.disabledReason
            ? getIsQuoteHidden(putBid.disabledReason) || putBid.premium.isZero()
            : false
          const hidePutAsk = putAsk.disabledReason
            ? getIsQuoteHidden(putAsk.disabledReason) || putAsk.premium.isZero()
            : false
          return {
            callBid: !hideCallBid ? callBid : null,
            callAsk: !hideCallAsk ? callAsk : null,
            putBid: !hidePutBid ? putBid : null,
            putAsk: !hidePutAsk ? putAsk : null,
            strike,
          }
        }),
    [board, market, size]
  )
}
