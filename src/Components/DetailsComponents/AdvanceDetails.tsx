import React from 'react'

import { useForm, SubmitHandler } from "react-hook-form"
import {

  Box,
  Button,
  Flex,

  Text,
  useColorMode,
  useColorModeValue,
  Spacer,
  FormControl,
  FormLabel,

  Input,


  // Grid,
  // Icon,
  // Image,
  // Link,
  // Switch,
  // FormErrorMessage,
  // FormHelperText,
  // Avatar,
  // AvatarGroup,
} from "@chakra-ui/react";
import {
    Select,
  } from "chakra-react-select";

const AdvanceDetails = () => {
    const { colorMode } = useColorMode();
    const advanceReasons = [
        { value: "Advance", label: "Advance" },
        { value: "Deduction", label: "Deduction" },
        { value: "Loan", label: "Loan" },
      ]
      const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "transparent");
  return (
    <div> <Flex
    direction={{ sm: "column", md: "row" }}
    align='center'
    w='100%'
    justify='center'
    py='1rem'
    borderRadius='15px'
    border='1px solid'

    borderColor={borderColor}
  >

    <Flex
      p='1rem'
      bg={colorMode === "dark" ? "navy.900" : "transparent"}
      width='100%'
      align='center'
      mb={{ sm: "24px", md: "0px" }}
      me={{ sm: "0px", md: "24px" }}>


      <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
        <FormLabel>Reason</FormLabel>
          <Select
           options={advanceReasons}
           placeholder="Select Reason"
         /> 
      </FormControl>
      <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
        <FormLabel>Date</FormLabel>
        <Input type="date" />
      </FormControl>
      <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
        <FormLabel>Amount</FormLabel>
        <Input type="number" />
      </FormControl>
      <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
        <FormLabel>Receipt Upload</FormLabel>
        <Input placeholder="Passport" type="file" />
      </FormControl>
    </Flex>

  </Flex>
  <Flex
    direction={{ sm: "column", md: "row" }}
    mt={10}
  >

    <Spacer />
    <Box p='4' >
      <Button colorScheme="teal" size="md">
        Save
      </Button>
    </Box>

  </Flex></div>
  )
}

export default AdvanceDetails