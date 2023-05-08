import { Box } from '@mui/material'
import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';

const Icons = styled(Box)`
    border: 1px solid #d7dfdd;
    border-radius: 5px;
    width: 7vw;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Arrow = styled(ArrowDownwardIcon)`
    border-right: 1px solid #d7dfdd;
`

const Delete = styled(DeleteIcon)`
    border-left: 1px solid #d7dfdd;
`

const Container = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BannerHeading = () => {
  return (
    <Container>
        <h2>
            Company Profile
        </h2>
        <Icons>
            <Arrow />
            <VisibilityOffIcon />
            <Delete />
        </Icons>
    </Container>
  )
}

export default BannerHeading