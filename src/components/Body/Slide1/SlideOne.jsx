import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import Random from './Random'

const MainContainer = styled(Box)`
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`

const SlideOne = () => {
  return (
    <MainContainer>
        <h2>Project Scope Recap</h2>
        <Random />
    </MainContainer>
  )
}

export default SlideOne