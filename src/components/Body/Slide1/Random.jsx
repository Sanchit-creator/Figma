import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Mutual = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 200px;
    height: 20px;
`

const Word = styled(Typography)`
    color: #7b8786;
`

const Three = styled(Typography)`
    color: #2dc39c;
`

const Percent = styled(Box)`
    height: 10px;
    width: 12px;
    margin: 1px;
    background-color: #d3d7d7;
`

const Container = styled(Box)`
    width: 200px;
    height: 20px;
    display: flex;
    justify-content: center;
`

const First = styled(Box)`
    height: 10px;
    width: 12px;
    margin-left: 0;
    margin: 1px;
    background-color: #00b686;
    border-radius: 5px 0px 0px 5px;
`

const Last = styled(Box)`
    height: 10px;
    width: 12px;
    margin-right: 0;
    margin: 1px;
    background-color: #d3d7d7;
    border-radius: 0px 5px 5px 0px;
`

const Random = () => {
  return (
    <Box>
        <Mutual>
            <Word fontSize="small">
                Mututal Action Plan
            </Word>
            <Three fontSize="small" fontWeight={800}>
                3%
            </Three>
        </Mutual>
        <Container>
            <First></First>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Percent></Percent>
            <Last></Last>
        </Container>
    </Box>
  )
}

export default Random