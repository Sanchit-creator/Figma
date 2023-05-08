import React from 'react'
import BodyHeading from './Heading/BodyHeading'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import Banner from './Banner/Banner'
import SlideOne from './Slide1/SlideOne'
import SlideTwo from './Slide2/SlideTwo'
import SlideThree from './Slide3/SlideThree'

const MainContainer = styled(Box)`
    background-color: #f2fbf9;
    overflow: hidden;
    margin: 0;
`

const Body = () => {
  return (
    <>
        <MainContainer>
            <BodyHeading />
            <Banner />
            <SlideOne />
            <SlideTwo />
            <SlideThree />
        </MainContainer>
    </>
  )
}

export default Body