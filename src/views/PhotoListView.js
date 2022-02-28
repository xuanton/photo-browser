import React from 'react'
import Header from '../components/Header';
import PhotoList from '../components/PhotoList';
import Footer from '../components/Footer';
import SelectionButtons from '../components/SelectionButtons';
import { Container } from '@material-ui/core';

function PhotoListView( {photosData} ) {
    return (
        <Container align="center">
            <Header />
            <PhotoList photosData={photosData} />
            <Footer />
        </Container>
    )
}

export default PhotoListView
