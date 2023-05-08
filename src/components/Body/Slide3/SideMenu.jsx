import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'


const Container = styled(Box)`
    width: 13vw;
    background-color: #ffffff;
    padding-left: 1vw;
    padding-left: 1vw;
    height: 37%;
    align-items: center;
    border-radius: 5px;
`

const Text = styled(Typography)`
    color: #949d9d;
    border-top : 1px solid #eef0f0;
    padding: 7px;
    font-size: 15px
`


const SideMenu = () => {
  return (
      <Container>
        <h2 style={{"color": "#657372"}}>Overview</h2>
        <Text>Welcome</Text>
        <Text>Product Capabilities</Text>
        <Text>Customer Success Stories</Text>
        <Text>File Sharing</Text>
        <Text>Our Deck</Text>
      </Container>
  )
}

export default SideMenu