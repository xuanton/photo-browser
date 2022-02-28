import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import { useParams } from 'react-router-dom';

function FullSizePhoto( {photosData}) {
    let id = useParams().id;
    return (
        <>{
            photosData.map(item => item.id == id && (
            <div key={item.id}>
                <img src={item.url}/>     
                <Typography>Caption: {item.title}</Typography> 
            </div>     
            ))}
        </>
    )
}

export default FullSizePhoto