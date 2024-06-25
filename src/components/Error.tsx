import { Link } from 'react-router-dom';
import './styles/Error.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
