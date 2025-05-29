import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h3>Opss!!!</h3>
            
            <Link to='/'>Go back To Home</Link>
        </div>
    );
};

export default ErrorPage;