import { PopulatedTransaction } from '@ethersproject/contracts'
import Box from '@lyra/ui/components/Box'
import Button from '@lyra/ui/components/Button'
import CardBody from '@lyra/ui/components/Card/CardBody'
import Collapsible from '@lyra/ui/components/Collapsible'
import Flex from '@lyra/ui/components/Flex'
import BigNumberInput from '@lyra/ui/components/Input/BigNumberInput'
import Modal from '@lyra/ui/components/Modal'
import Shimmer from '@lyra/ui/components/Shimmer'
import Text from '@lyra/ui/components/Text'
import formatNumber from '@lyra/ui/utils/formatNumber'
import { Market, PricingParams } from '@lyrafinance/lyra-js'
import React, { useState } from 'react'

import { ZERO_BN } from '@/app/constants/bn'
import useAdmin from '@/app/hooks/admin/useAdmin'
import withSuspense from '@/app/hooks/data/withSuspense'
import useMarketOwner from '@/app/hooks/market/useMarketOwner'
import useAdminTransaction from '@/app/hooks/transaction/useAdminTransaction'
import useWallet from '@/app/hooks/wallet/useWallet'
import fromBigNumber from '@/app/utils/fromBigNumber'

type Props = {
  market: Market
  isExpanded: boolean
  onClickExpand: () => void
  onParamUpdate: () => void
}

const zeroDecimalKeys: (keyof PricingParams)[] = [
  'spotPriceFee1xPoint',
  'spotPriceFee2xPoint',
  'optionPriceFee1xPoint',
  'optionPriceFee2xPoint',
]

const AdminMarketPricingParams = withSuspense(
  ({ market, isExpanded, onClickExpand, onParamUpdate }: Props) => {
    const { account, isConnected } = useWallet()
    const admin = useAdmin(market.lyra.network)
    const owner = useMarketOwner(market)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)
    const [params, setParams] = useState<Partial<PricingParams>>({})
    const [newParams, setNewParams] = useState<Partial<PricingParams>>({})
    const [tx, setTx] = useState<PopulatedTransaction | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const execute = useAdminTransaction(market.lyra.network, owner)
    if (!market) {
      return null
    }
    return (
      <>
        <Box my={2}>
          <Collapsible
            header={<Text variant="heading2">Pricing Parameters</Text>}
            onClickHeader={onClickExpand}
            isExpanded={isExpanded}
          >
            <Box px={4}>
              {Object.entries(market.marketParameters.pricingParams).map(([key, value]) => {
                if (parseInt(key) || parseInt(key) === 0) {
                  return
                }
                const typedKey = key as keyof PricingParams
                const isZeroDecimals = zeroDecimalKeys.includes(typedKey)
                const val = params[typedKey] ?? ZERO_BN
                return (
                  <Flex flexDirection="column" my={2} key={key}>
                    <BigNumberInput
                      isDisabled={isLoading}
                      decimals={isZeroDecimals ? 0 : 18}
                      label={key}
                      value={val}
                      key={key}
                      placeholder={isZeroDecimals ? fromBigNumber(value, 0).toString() : value}
                      onEmpty={() => {
                        const toParams = { ...params }
                        delete toParams[typedKey]
                        setParams(toParams)
                      }}
                      onChange={val => {
                        const toParams = {
                          ...params,
                          [key]: val,
                        }
                        setParams(toParams)
                      }}
                    />
                  </Flex>
                )
              })}
              <Button
                label="Update"
                isDisabled={!isConnected}
                isLoading={isLoading}
                onClick={async () => {
                  if (!account || !admin) {
                    return
                  }
                  setIsLoading(true)
                  const { tx, params: newParams } = await admin.setPricingParams(market, account, params)
                  setIsLoading(false)
                  setNewParams(newParams)
                  setTx(tx)
                  setIsConfirmOpen(true)
                }}
              />
            </Box>
          </Collapsible>
        </Box>
        <Modal isOpen={isConfirmOpen} onClose={() => setIsConfirmOpen(false)} title="Confirm New Pricing Parameters">
          <CardBody>
            <Box>
              {newParams
                ? Object.entries(newParams).map(([key, value]) => {
                    if (parseInt(key) || parseInt(key) === 0) {
                      return
                    }
                    const typedKey = key as keyof PricingParams
                    const isZeroDecimals = zeroDecimalKeys.includes(typedKey)
                    const val = value ?? ZERO_BN
                    return (
                      <Flex my={2} key={key} justifyContent="space-between">
                        <Text color="secondaryText">{key}</Text>
                        <Text ml={1}>{formatNumber(fromBigNumber(val, isZeroDecimals ? 0 : 18), { minDps: 0 })}</Text>
                      </Flex>
                    )
                  })
                : null}
            </Box>
            <Button
              my={4}
              variant="primary"
              label="Confirm"
              onClick={() => {
                if (tx) {
                  setIsLoading(true)
                  execute(tx, {
                    onComplete: () => {
                      onParamUpdate()
                      setIsConfirmOpen(false)
                      setIsLoading(false)
                    },
                    onError: () => {
                      setIsLoading(false)
                    },
                  })
                }
              }}
            />
          </CardBody>
        </Modal>
      </>
    )
  },
  () => <Shimmer height={56} my={2} />
)

export default AdminMarketPricingParams
