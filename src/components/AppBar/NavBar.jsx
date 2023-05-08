import { AppBar, Box, Toolbar } from '@mui/material'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import React from 'react'
import Icons from './Icons';
import styled from '@emotion/styled';


const ToolTip = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`

const App = styled(AppBar)`
  background-color: #f2fbf9;
`

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <App position="static">
        <ToolTip>
          <Box
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{"padding": "2vw"}}
          >
            <LogoDevIcon/>
          </Box>
          <Icons />
        </ToolTip>
      </App>
    </Box>
  )
}

export default Header