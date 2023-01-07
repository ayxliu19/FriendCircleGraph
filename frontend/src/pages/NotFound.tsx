import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className=''>
            <h1> NOT FOUND </h1>
            <Link to="/"> GO TO HOME </Link>
        </div>
    );
}

export default NotFound;
