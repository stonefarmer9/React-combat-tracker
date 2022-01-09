import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" color="inherit">
                        Combat & Conditions Tracker
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;