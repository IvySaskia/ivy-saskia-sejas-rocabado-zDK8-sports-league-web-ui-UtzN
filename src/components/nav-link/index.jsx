import { Link as DefaultLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavLink = ({ children, ...props }) => (
  <DefaultLink
    as={Link}
    {...props}
  >
    {children}
  </DefaultLink>
);

export default NavLink;