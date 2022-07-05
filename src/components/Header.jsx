import { Navbar } from "react-daisyui";

export const Header = () => {
  return (
    <nav>
      <Navbar>
        <Navbar.Start>
          <span className="text-3xl font-bold">SPACED OUT</span>
        </Navbar.Start>
        <Navbar.End></Navbar.End>
      </Navbar>
    </nav>
  );
};
