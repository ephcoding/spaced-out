import { Navbar } from "react-daisyui";
import { Link as RouterLink } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar>
      <Navbar.Start>
        <span className="text-3xl font-bold">SPACED OUT</span>
      </Navbar.Start>
      <nav>
        <Navbar.End>
          <RouterLink to="/" className="px-5 py-2.5">
            home
          </RouterLink>
          <RouterLink to="/apod" className="px-5 py-2.5">
            apod
          </RouterLink>
        </Navbar.End>
      </nav>
    </Navbar>
  );
};
