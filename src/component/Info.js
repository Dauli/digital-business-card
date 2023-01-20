import Photo from "../images/AlexisDauli.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from "@fortawesome/free-solid-svg-icons"

function Info() {
    return (
        <div className="info">
            <img className="photo" alt="myPhoto" src={Photo}/>
            <h3 className="myName">Alexis Ange Dauli</h3>
            <p className="p-title">
                Frontend Developer 
            </p>
            <p className="p-web">
                <a href="https://daulitech.co.za" target="_blank">
                    www.daulitech.co.za
                </a>
                
            </p>
            <button className="btn-email">
                <a href="mailto:daulitech@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                </a>
            </button>
            <button className="btn-linkden">
                <a href="www.linkedin.com/in/alexis-dauli-839551113" target="_blank">
                    <FontAwesomeIcon icon={faInfo} /> Linkden
                </a>
            </button>
        </div>
    )
}

export default Info