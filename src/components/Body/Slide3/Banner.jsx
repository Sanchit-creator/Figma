import React from 'react'
import BannerHeading from './BannerHeading'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import Image from './Image'

const Container = styled(Box)`
    width: 80vw;
    margin-left: 2vw;
`

const Banner = () => {
  return (
    <Container>
        <BannerHeading />
        <Image />
    </Container>
  )
}

export default Banner