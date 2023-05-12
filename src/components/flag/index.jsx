import React from "react";

import {
    Image
} from "@chakra-ui/react";


const getFlagByName = (flagName) => {
  return `https://flagsapi.codeaid.io/${flagName}.png`;
};

const Flag = ({ flagName }) => {
    return (
        <Image
            src={getFlagByName(flagName)}
            alt={flagName}
            width="53px"
            height="37px"
        />
    );
};

export default Flag;