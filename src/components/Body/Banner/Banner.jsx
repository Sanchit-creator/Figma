import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

const Image1 = styled(Box)`
    width: 95vw;
    height: 25vh;
    border-radius: 20px;
`

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5%;
    margin: 0;
    height: 200px;
`

const Image2 = styled(Box)`
    display: flex;
    justify-content: start;
    padding-left: 2.5vw;
    transform: translateY(-70px);
    height: 100px;
`

const Img = styled(Box)`
    border-radius: 20px;
`

const Banner = () => {
  return (
    <Container>
        <Image1 component="img" src="./images/img.png" alt="image" />
        <Image2>
            <Img component="img" src='./images/img2.png' alt="image" />
        </Image2>
    </Container>
  )
}

export default Banner