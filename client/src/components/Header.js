import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="navbardiv">
      <nav className="navbar">
        <Link to ="/">
        <img src="images/deepcafe.png" height="150px" style={{marginTop: "-20px"}} alt="" />
        </Link>
        <ul>
         
          <li className=""> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li className=""> <Link to="/menu">Menu</Link> </li>
          <li className=""> <Link to="/services">Services</Link></li>
          <li className=""> <Link to="/gallery">Gallery </Link></li>
          <li className=""> <Link to="/contactus">Contact Us</Link></li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;