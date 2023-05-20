import { Link, useRouteError } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import img from './src/assets/404.jpg';
export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page" className="text-center mt-5">
            <Image style={{height:'80vh'}} src={img} />
            <p>
                <i>{error.statusText || error.message}</i>
                <br />
                <Link to="/" className="btn btn-info">Go Back to Home</Link>

            </p>
        </div>
    );
}