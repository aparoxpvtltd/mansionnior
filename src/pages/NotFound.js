import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-content notfound-page">
      <div className="notfound-card">
        <h1>404</h1>
        <p>We couldn’t find that page.</p>
        <Link className="primary-btn" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
