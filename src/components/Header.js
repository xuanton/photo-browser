import React from 'react';
import { Typography } from '@material-ui/core';
import CameraAlt from '@material-ui/icons/CameraAlt';

function Header() {
    return (
        <Typography variant="h2">
        <CameraAlt fontSize='large'></CameraAlt> Photo Browser
        </Typography>    
    );
}

export default Header;