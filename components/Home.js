import { Flex } from "@chakra-ui/react";
import Content from "./Content";

const Home = () => {
  return (
    <Flex
      fontFamily="Manrope"
      bgColor="neutral.darkBlue"
      color="primary.lightCyan"
      h="100vh"
      align="center"
      justify="center"
    >
      <Content />
    </Flex>
  );
};

export default Home;
