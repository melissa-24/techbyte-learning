import { Link } from "react-router-dom"
import error_404 from "../assets/images/404_error.png"
import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const BadLink = () => {
    useEffect(() => changeTitle("Error 404 - "), []);
    return(
        <main>
            <div className="error_404">
                <h1>It appears your lost...</h1>
                <h4>(Click <Link to="/">HERE</Link> and we'll get you back home)</h4>
                <img className="error_image" src={error_404} alt="Oops 404" />
            </div>
        </main>
    )
}

export default BadLink