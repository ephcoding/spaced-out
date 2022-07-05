import { Link } from "react-daisyui";

export const ExtLink = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};
