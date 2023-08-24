import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            alt="Logo"
            width={130}
            height={29}
            src={headerLogo}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img
            width={25}
            height={25}
            alt="hamburger"
            src={hamburger}
          />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
