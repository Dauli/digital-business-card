import Facebook from "../images/facebook.svg"
import Github from "../images/github.svg"
import Google from "../images/google.svg"
import Instagram from "../images/instagram.svg"

function Footer() {
    return(
        <footer className="footer">
            <a href="https://facebook.com/daulitech" target="_blank">
                <img className="facebook" src={ Facebook } alt="facebook" />
            </a>
            <a href="https://github.com/dauli" target="_blank">
                <img className="github" src={ Github } alt="github" />
            </a>
            <a href="https://g.page/r/CROWqp3Rzw-4EAE" target="_blank">
                <img className="google" src={ Google } alt="google" />
            </a>
            <a href="https://instagram.com/daulitech" target="_blank">
                <img className="instagram" src={ Instagram } alt="instagram" />
            </a>
        </footer>
    )
}

export default Footer 