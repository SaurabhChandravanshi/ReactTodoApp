import logo from '../images/todo-list.svg';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
            <span className="navbar-brand mb-0 h1">TODO</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse p-1" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <li className="nav-item pl-4">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="faq">FAQs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">About</Link>
            </li>
          </div>
          
        </div>
    </nav>
  );
}