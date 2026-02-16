import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants/index";

const NavBar = () => {
  useGSAP(() => {});
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="images/logo.png" alt="Velvet Logo" />
          <p>Velvet Pour</p>
        </a>
        {navLinks.map((link) => (
          <a href={`#${link.id}`}>
            <li className="list-none" key={link.id}>
              {link.title}
            </li>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
