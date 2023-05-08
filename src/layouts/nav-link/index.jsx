import { Link as DefaultLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavLink = ({ children, ...props }) => (
  <DefaultLink
    as={Link}
    rounded={"md"}
    {...props}
  >
    {children}
  </DefaultLink>
);

export default NavLink;