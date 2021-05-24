import Comic from './Comic';
import Footer from "./Footer";
import Img from "../Img/icon.png";

const Principal =() =>{
    let number = Math.floor(Math.random() * 1000);
    return (
        <div className="principal">
            <div className="header">
                    <img src={Img} alt="" height="100px" />
                    <h1 className="tittlePage">Calificador de comics</h1></div>
                    <Comic aleatorio={number}/>
                    <Footer/>
        </div>
)}

export default Principal;
