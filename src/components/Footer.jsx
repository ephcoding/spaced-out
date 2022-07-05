import { Footer as DUIFooter } from "react-daisyui";
import { ExtLink } from "./ExtLink";

export const Footer = () => {
  return (
    <DUIFooter>
      <div>
        <DUIFooter.Title>NASA +</DUIFooter.Title>
        <ExtLink href="#">Test link</ExtLink>
        <ExtLink href="#">Test link</ExtLink>
        <ExtLink href="#">Test link</ExtLink>
      </div>
      <div>
        <DUIFooter.Title>Developers</DUIFooter.Title>
        <ExtLink href="#">Test link</ExtLink>
        <ExtLink href="#">Test link</ExtLink>
        <ExtLink href="#">Test link</ExtLink>
      </div>
      <div>
        <DUIFooter.Title>About Ephraim</DUIFooter.Title>
        <ExtLink href="#">Test link</ExtLink>
        <ExtLink href="#">Test link</ExtLink>
        <ExtLink href="#">Test link</ExtLink>
      </div>
    </DUIFooter>
  );
};
