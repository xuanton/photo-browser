import React from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Button } from '@material-ui/core';
import Header from '../components/Header';
import FullSizePhoto from '../components/FullSizePhoto';

function PhotoFullSizeView( {photosData} ) {
    return (
        <Container align="center">
            <Header />
            <FullSizePhoto photosData={photosData}/>
            <Button variant="contained"><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}} >Go Back</Link></Button>
        </Container>
    )
}

export default PhotoFullSizeView
