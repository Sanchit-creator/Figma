import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from '@emotion/styled';

const Icon = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: inherit;
`

const Icons = () => {
  return (
    <Icon>
        <Box
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SearchIcon />
          </Box>
          <Box
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CameraAltIcon />
          </Box>
          <Box
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NotificationAddIcon />
          </Box>
          <Box
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HelpOutlineIcon />
          </Box>
          <Box
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccountCircleIcon />
          </Box>
    </Icon>
  )
}

export default Icons