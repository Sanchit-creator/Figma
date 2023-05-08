import React from 'react'
import SideMenu from './SideMenu'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import Banner from './Banner'


const Container = styled(Box)`
    display: flex;
    justify-content: center;
    padding: 2vh 2vw;
`



const SlideThree = () => {
  return (
    <Container>
        <SideMenu/>
        <Banner />
    </Container>
  )
}

export default SlideThree