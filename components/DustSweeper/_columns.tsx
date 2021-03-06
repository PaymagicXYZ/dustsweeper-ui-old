import { Badge, Center } from '@chakra-ui/react'
import * as React from 'react'
import { ethers } from "ethers";
import { User } from './User'
import {
  Text,
  Link
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import numeral from "numeral";
import TokenDisplay from '../TokenDisplay'
import TokenAmountDisplay from '../TokenAmountDisplay'

import {
  shortenAddress,
  shortenTx,
  getBlockExplorerLink,
  displayISODatetime,
} from "../../utils"

export const cols = [


  {
    Header: 'TOKEN',
    accessor: 'contract_ticker_symbol',
    Cell: function Cell(data: any) {
      return (
        <TokenDisplay
          symbol={data.contract_ticker_symbol}
          imageUrl={data.logo_url}
        />
      )
    }
  },

  {
    Header: 'PRICE',
    accessor: 'quote_rate',
    Cell: function Cell(data: any) {
      return numeral(
        data.quote_rate
        ).format('$0,0.00')
    }
  },

  {
    Header: 'LAST TRANSFERRED',
    accessor: 'last_transferred_at',
    Cell: function Cell(data: any) {
      return (
        <Text>
          { displayISODatetime(data.last_transferred_at)}
        </Text>
      )
    }
  },

  {
    Header: 'BALANCE',
    accessor: 'balance',
    Cell: function Cell(data: any) {
      return (
        <TokenAmountDisplay
          amountUsd={data.quote}
          amountTokens={ethers.utils.formatUnits(
            data.balance,
            data.contract_decimals
          )}
          symbol={data.contract_ticker_symbol}
        />
      )
    }
  },

  {
    Header: 'YOU RECEIVE IN ETH',
    accessor: 'balanceETH',
    Cell: function Cell(data: any) {
      return (
        <Center>
          <TokenAmountDisplay
            amountUsd={data.quote * .9}
          />
        </Center>
      )
    }
  },

  // {
  //   Header: 'App',
  //   accessor: 'input',
  // },
  // {
  //   Header: 'STATUS',
  //   accessor: 'txSuccessful',
  //   Cell: function StatusCell(data: any) {
  //     return (
  //       data ? (
  //         <Badge fontSize="xs" colorScheme="green">
  //           Confirmed
  //         </Badge>
  //       ) : (
  //         <Badge fontSize="xs" colorScheme="yellow">
  //           Pending
  //         </Badge>
  //       )
  //     )
  //   }
  // },
  // {
  //   Header: 'DATE',
  //   accessor: 'timeStamp',
  //   Cell: function StatusCell(data: any) {
  //     return (
  //       <Text RootComponent="span">
  //         { displayTxDatetime(data) }
  //       </Text>
  //     )
  //   }
  // },
  // {
  //   Header: 'TX HASH',
  //   accessor: 'hash',
  //   Cell: function StatusCell(data: any) {
  //     return (
  //       <Link href={getBlockExplorerLink(data,'transaction')} isExternal>
  //         { shortenTx(data) } <ExternalLinkIcon mx="2px" />
  //       </Link>
  //     )
  //   }
  // }
]
