import imgMasiv from "../Img/masiv.png"

const Footer =() =>{
    return (
        <div className="divFooter">
            <div className="div1footer">
            <span className="span1">Reto</span>
            <img src={imgMasiv} alt="" height="50px"/>
            </div>
            <div className="div2footer">
            <span className="span2">Hecho por Stephanie Jolianis</span>
            <i className="em em-female-technologist"/>
            </div>
        </div>
)}

export default Footer;