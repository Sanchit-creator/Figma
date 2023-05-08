import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 95vw;
    margin: 0;
`

const Btn = styled(Button)`
    border: 1px solid #d7dfdd;
    color: #657372;
    border-radius: 5px 5px 0 0;
`

const BtnOne = styled(Button)`
    border: 1px solid #d7dfdd;
    color: #6fd6bb;
    background-color: #ffffff;
    border-radius: 5px 5px 0 0;
`

const ButtonContainer = styled(Box)`
    width: 31%;
    display: flex;
    justify-content: space-between;
`

const Line = styled(Box)`
    width: inherit;
    height: 0;
    border-top: 1px solid #d7dfdd;
    margin: 0;
`

const MainContainer = styled(Box)`
    padding-left: 2.5vw;
    padding-right: 2.5vw;
`

const SlideTwo = () => {
  return (
    <MainContainer>
        <Container>
            <ButtonContainer>
                <BtnOne>
                    Basic Info
                </BtnOne>
                <Btn>
                    Files
                </Btn>
                <Btn>
                    Mutual Action Plan
                </Btn>
                <Btn>
                    Contact
                </Btn>
            </ButtonContainer>
            <Box>
                <Btn>
                    Internal Actions
                </Btn>
            </Box>
        </Container>
        <Line />
    </MainContainer>

  )
}

export default SlideTwo