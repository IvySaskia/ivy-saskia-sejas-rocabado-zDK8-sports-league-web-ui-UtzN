import React from "react";

import {
    Box,
    Image,
    Flex,
    Spacer,
} from "@chakra-ui/react";

import Menu from "../../components/menu";

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
            <Menu />
        </Flex>
  );
};

export default Header;