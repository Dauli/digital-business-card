import Info from "./Info.js"
import About from "./About.js"
import Interest from "./Interest.js"
import Footer from "./Footer.js"

function Container() {
    return(
        <div className="container">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}

export default Container