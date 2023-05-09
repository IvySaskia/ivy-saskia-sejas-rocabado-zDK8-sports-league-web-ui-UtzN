import React from "react";

import {
    Box,
    HStack,
    Image,
    Flex,
    Spacer,
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

const Header = () => {
    return (     
        <Flex
            width="100%"
            bg='#025FEB'
            color="white"
            h="60px"
            px={10}
            display='flex'
            alignItems={"center"}
        >
            <Box p='4'>
                <Image
                    src='/images/logo.svg'
                    alt='logo'
                    width="100px"
                />
            </Box>
            <Spacer />
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
        </Flex>
  );
};

export default Header;