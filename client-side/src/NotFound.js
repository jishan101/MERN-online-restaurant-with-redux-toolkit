import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="mx-[6%] my-8 md:my-16 text-center">
            <h1 className="mb-2 font-righteous text-primary-color text-9xl">404</h1>
            <h3 className="mb-4 font-righteous text-6xl">Page Not Found</h3>
            <Link to="/" className="font-righteous text-action-color text-5xl">Back To Home</Link>
        </div>
    );
}
 
export default NotFound;

