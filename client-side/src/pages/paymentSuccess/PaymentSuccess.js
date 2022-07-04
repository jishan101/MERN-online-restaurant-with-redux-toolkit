import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
    return (
        <div className="mx-[6%] my-8 md:my-16 text-center">
            <FontAwesomeIcon size="4x" color="green" icon={ faCheckCircle } />
            <h1 className="my-2 font-righteous text-primary-color text-5xl">Success!</h1>
            <h3 className="text-3xl">Your request has been processed successfully</h3>
            <h6 className="mb-7 text-gray-500">You'll receive a confirmation email shortly</h6>
            <Link to="/menu" className="btn">Continue Shopping</Link>
        </div>
    );
}
 
export default PaymentSuccess;

