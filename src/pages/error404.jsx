import {Button} from "react-bootstrap";

function Error404(){
    return(
    <div className="error404page">
        <h1 id="oops">Oops!</h1>
        <h3 id="pageNotFound">We can't find the page you're looking for</h3>
        <p id="errorCode">Error code: 404</p>
        <Button href="/" id="homeButton" variant="outline-light">Home page</Button>
    </div>
    );
}

export default Error404;