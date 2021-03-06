import React from 'react'
import _ from 'lodash';

import { Box, Image, Stack } from '@chakra-ui/react'

export default function TokenDisplay(props) {
  const symbol = props.symbol || '';
  const imageUrl = props.imageUrl || null;

  return (
    <Stack direction="row" spacing="4" align="center">
    	{
    		props.imageUrl && (
		      <Box flexShrink={0} h="10" w="10">
		        <Image
		          objectFit="cover"
		          htmlWidth="160px"
		          htmlHeight="160px"
		          w="10"
		          h="10"
		          rounded="full"
		          src={imageUrl}
		          alt=""
		          fallback={(<></>)}
		        />
		      </Box>
    		)
    	}
      <Box>
        <Box fontSize="sm" fontWeight="medium">
          {symbol}
        </Box>
      </Box>
    </Stack>
  )
}