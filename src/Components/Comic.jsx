import { useState, useEffect } from "react";
import { ObtenerData } from "../Datos/datos";
//----------------------------------------------->
import {RatingComponent} from "./RatingComponent"

const Comic =(props) =>{
    const [dataComic, setDataComic] = useState([]);

    useEffect(()=>{
        ObtenerData(props.aleatorio).then(function(data){
            setDataComic(data);
            return console.log(data)
        });  
    }, [])
 
    return (
        <div className="divComic">
            <h1 className="tittleComic">{dataComic.title}</h1>
            <img className="imgComic" src={dataComic.img} alt="" />

            <div>
                <RatingComponent/>
            </div>
        </div>
)}

export default Comic;
