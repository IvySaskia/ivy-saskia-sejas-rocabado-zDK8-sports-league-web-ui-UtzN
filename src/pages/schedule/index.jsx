import React from "react";

import {
  Flex
} from "@chakra-ui/react";

import HeadingPages from "../../components/heading-pages";
import ScheduleTable from "../../components/schedule-table";

const Schedule = () => {
  return (
    <Flex
      width="100%"
      bg="white"
      px={"5%"}
      direction={"column"}
    >
      <HeadingPages title={"League Schedule"} />
      <ScheduleTable/>
    </Flex>
  );
};

export default Schedule;