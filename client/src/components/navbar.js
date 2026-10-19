import { NavLink, Link } from "react-router-dom";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Education", path: "/education" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="KM logo" width="40" height="40" />
        
        <span>Kevin Mai</span>
      </Link>

      <nav>
        {navigationLinks.map((link) => (
          <NavLink key={link.path} to={link.path} end>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
