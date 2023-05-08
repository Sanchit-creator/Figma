import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import React from 'react'
import Line from './Line'

const HeadingBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding-left: 2.5vw;
    padding-right: 2.5vw;
    margin-bottom: 20px;
`

const Btn = styled(Button)`
    background-color: #00b686;
    height: 40px;
    color: white;
`

const BodyHeading = () => {
  return (
    <>
        <Line />
        <HeadingBox>
            <h1>WeWork + Salesforce</h1>
            <Btn>Publish/Share</Btn>
        </HeadingBox>
    </>
  )
}

export default BodyHeading