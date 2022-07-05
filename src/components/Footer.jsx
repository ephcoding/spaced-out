import { Footer as DUIFooter } from "react-daisyui";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <DUIFooter>
      <div>
        <DUIFooter.Title>NASA +</DUIFooter.Title>
      </div>
      <div>
        <DUIFooter.Title>Developers</DUIFooter.Title>
      </div>
      <div>
        <DUIFooter.Title>About Ephraim</DUIFooter.Title>
      </div>
    </DUIFooter>
  );
};
