import React from 'react'
import Header from '../components/Header';
import AlbumList from '../components/AlbumList';
import Footer from '../components/Footer';
import SelectionButtons from '../components/SelectionButtons';
import { Container } from '@material-ui/core';

function AlbumView( { photosData } ) {
    return (
        <Container align="center">
            <Header />
            <SelectionButtons/>
            <AlbumList photosData={photosData} />
            <Footer />
        </Container>
    )
}

export default AlbumView
