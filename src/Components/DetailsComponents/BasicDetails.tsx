

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
  RadioGroup,
  Radio,
  HStack,

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



const BasicDetails = () => {
    const { colorMode } = useColorMode();
    const borderColor = useColorModeValue("#dee2e6", "transparent");
  return (
    <div>
        <Flex
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
              <FormLabel>Passport</FormLabel>
              <Input placeholder="Passport" />
            </FormControl>
            <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
              <FormLabel>Passport Upload</FormLabel>
              <Input placeholder="Passport" type="file" />
            </FormControl>


          </Flex>
        </Flex>

        <Flex
          direction={{ sm: "column", md: "row" }}
          mt={10}
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
              <FormLabel>Visa Expiry</FormLabel>
              <Input placeholder="Visa Expiry" />
            </FormControl>
            <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
              <FormLabel>Visa Upload</FormLabel>
              <Input placeholder="Passport" type="file" />
            </FormControl>


          </Flex>
        </Flex>
        <Flex
          direction={{ sm: "column", md: "row" }}
          mt={10}
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
              <FormLabel>Eid Expiry</FormLabel>
              <Input placeholder="Visa" />
            </FormControl>
            <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
              <FormLabel>EID Upload</FormLabel>
              <Input type="file" />
            </FormControl>


          </Flex>
        </Flex>

        <Flex
          direction={{ sm: "column", md: "row" }}
          mt={10}
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
              <FormLabel>Work Permit</FormLabel>
              <Input placeholder="Work Permit No" />
            </FormControl>
            <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
              <FormLabel>Personal Number</FormLabel>
              <Input placeholder="Personal Number" />
            </FormControl>
            <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
              <FormLabel>Personal Account Number</FormLabel>
              <Input placeholder="Personal Account Number" />
            </FormControl>
            <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
              <FormLabel>Labour Card Upload</FormLabel>
              <Input type="file" />
            </FormControl>

          </Flex>

        </Flex>
        
       
        <Flex
          direction={{ sm: "column", md: "row" }}
          mt={5}
        >

          <Spacer />
          <Box p='4' >
            <Button type="submit" colorScheme="teal" size="md">
              Save
            </Button>
          </Box>

        </Flex>
</div>
  )
}

export default BasicDetails