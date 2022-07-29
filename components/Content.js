import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";

const Content = () => {
  const [advice, setAdvice] = useState(" ");
  const [adviceId, setAdviceId] = useState("");

  const generateAdvice = async () => {
    try {
      const res = await fetch(`https://api.adviceslip.com/advice`);
      const data = await res.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
      // console.log(data.slip.advice)
    } catch (error) {
      // console.log(error)
    }
  };

  return (
    <Flex direction="column">
      <Flex
        align="center"
        justify="center"
        direction="column"
        h="250px"
        w="350px"
        p="25px"
        bgColor="neutral.darkGrayishBlue"
        borderRadius="10px"
        gap="15px"
      >
        <Flex
          align="center"
          color="primary.neonGreen"
          fontSize="sm"
          h="10%"
          letterSpacing="5px"
        >
          ADVICE #{adviceId}
        </Flex>
        <Flex
          align="center"
          fontSize="26px"
          h="47%"
        //   noOfLines={3}
        textOverflow='ellipsis'
          textAlign="center"
          lineHeight="1.2"
        >
          <Flex justify="center" align="center" >
            "{advice}"
          </Flex>
        </Flex>
        <Flex h="15%">
          <Image
            src="pattern-divider-desktop.svg"
            alt="pattern-divider-desktop"
            fit="contain"
          />
        </Flex>
      </Flex>
      <Flex align="center" justify="center">
        <Flex
          h="48px"
          w="48px"
          bgColor="primary.neonGreen"
          position="relative"
          bottom="24px"
          borderRadius="50%"
          _hover={{
                boxShadow: '0px 0px 18px hsl(150, 100%, 66%)',
                cursor: 'pointer'
            }}
        >
          <Image
            src="icon-dice.svg"
            alt="icon-dice"
            fit="none"
            
            onClick={generateAdvice}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Content;
