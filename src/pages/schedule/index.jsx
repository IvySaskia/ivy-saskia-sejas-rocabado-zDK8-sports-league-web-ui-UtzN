import React from "react";

import {
  Flex
} from "@chakra-ui/react";

import PageHeading from "../../components/page-heading";
import ScheduleTable from "../../components/schedule-table";

const Schedule = () => {
  return (
    <Flex
      width="100%"
      bg="white"
      px={"5%"}
      direction={"column"}
    >
      <PageHeading title={"League Schedule"} />
      <ScheduleTable/>
    </Flex>
  );
};

export default Schedule;