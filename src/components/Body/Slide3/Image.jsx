import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

const Banner = styled(Box)`
    width: inherit;
    height: 500px;
    border-radius: 0 10px 10px 10px;
`

const Word = styled(Box)`
    opacity: 0.5;
    height: 100px;
    width: 300px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const WordContainer = styled(Box)`
    display: flex;
    justify-content: center;
    transform: translateY(-300px);
    height: 0px;
`

const Footer = styled(Box)`
    display: flex;
    justify-content: start;
`

const Icons = styled(Box)`
    height: 20px;
    color: #778483;
    display: flex;
`

const Notification = styled(Box)`
    display: flex;
    justify-content: center;
    width: 15px;
    border-right: 1px solid #778483;
    margin-right: 10px;
    padding-right: 10px; 
`

const Green = styled(Typography)`
    border-radius: 50%;
    background-color: #00b686;
    height: 10px;
    width: 15px;
    color: #ffffff;
    font-size: 8px;
    transform: translateX(-7px) translateY(-4px);
    z-index: 1;
`

const Image = () => {
  return (
    <>
    <Banner component="img" src='./images/img3.png' />
    <WordContainer>
        <Word>
            <h1 style={{"margin": "0"}}>WEWORK</h1>
            <h4 style={{"margin": "0"}}>For all the ways you work, we're here</h4>
        </Word>
    </WordContainer>
    <Footer>
        <Icons>
            <Notification>
                <ChatIcon size="large" />
                <Green>8</Green>
            </Notification>
            <ShareIcon size="large" />
        </Icons>
    </Footer>
    </>
  )
}

export default Image