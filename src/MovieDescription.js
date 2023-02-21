import React, {useEffect, useState} from "react";
 import getMovieImg from './utils/getMovieImg'

export default function MovieDescription({filePath, movie}) {
    const [imgURL, setimgURL] = useState('');
    useEffect(()=>{
        getMovieImg(setimgURL, filePath);
      }, [])

    return(
        <div style = {style} >
        <p style={titleStyle}>{movie.title}
        </p>
        <img src= {imgURL} style={imgStyle}></img>
        <p style={descriptionStyle}>{movie.overview.substring(0, 75)}...</p>
        </div>
    )
}
const style = {
        border: '1px solid black',
        height: '300px',
        marginTop: '180px',
        width: '180px',
        float: 'left',
        backgroundColor: 'white',
        marginLeft: '32px',
        borderRadius: '10px', 
        }
    const titleStyle = {
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold'

    }
    const imgStyle = {
        height: '100px',
        width: '100px'
    }
    const descriptionStyle = {
        color: 'black',
        overflow: 'hidden',
        fontSize: '16px',
        fontWeight: 'bold'


    }