import React from "react";

import {
    Image,
    HStack,
} from "@chakra-ui/react";

import NavLink from "../nav-link";

const Links = [
  {
    name: "Schedule",
    to: "/schedule",
    image: "/images/schedule.png" 
  },
  {
    name: "Leaderboard",
    to: "/leaderboard",
    image: "/images/leaderboard.png"
  },
];

const Menu = () => {
    return (   
        <HStack spacing={10}>
            {Links.map(({ name, to, image }, index) => (
                <HStack
                    spacing={2}
                    alignItems={"center"}
                    key={index}
                >
                    <Image
                        src = {image}
                        alt = "image"
                        width = "25px"
                    />
                    <NavLink
                        key={name}
                        to={to}
                        image={image}
                    >             
                        {name}
                    </NavLink>
                </HStack>
        ))}
        </HStack>
    );
};

export default Menu;