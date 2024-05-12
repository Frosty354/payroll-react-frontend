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
import Card from "./Card/Card";
import CardBody from "./Card/CardBody";
import CardHeader from "./Card/CardHeader";
import AdditionalDetails from "./AdditionalDetails";
// import IconBox from "./Icons/IconBox";
// import { MastercardIcon, VisaIcon } from "components/Icons/Icons";


type Inputs = {
  name: string
  dob: string
  gender:string
  country:string
  phoneNumber:number
  email:string
  employeeType:string
  salary:number
}
export default function FormComponent() {
  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "transparent");
  // const iconColor = useColorModeValue("blue.500", "white");
  // const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  // const borderProfileColor = useColorModeValue("white", "transparent");
  // const emailColor = useColorModeValue("gray.400", "gray.300");
  const employeeRoles = [
    { value: "Partner", label: "Partner" },
    { value: "Management", label: "Management" },
    { value: "Accountant", label: "Accountant" },
    { value: "Supervisor", label: "Supervisor" },
    { value: "Driver", label: "Driver" },
    { value: "TL", label: "TL" },
    { value: "ATL", label: "ATL" },
    { value: "Cleaning Machine Operator", label: "Cleaning Machine Operator" },
    { value: "Cleaner", label: "Cleaner" },
  ]
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  console.log(watch("name")) // watch Input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Flex direction='column' pt={{ base: "120px", md: "75px", lg: "100px" }}>

      <Card p='16px' mt='24px'>
        <CardHeader>
          <Flex
            justify='space-between'
            align='center'
            minHeight='60px'
            w='100%'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Employee Details
            </Text>
            <Button variant={colorMode === "dark" ? "primary" : "dark"}>
              All Employees
            </Button>
          </Flex>
        </CardHeader>
        <CardBody>
          
            <form >
              <Flex
                direction={{ sm: "column", md: "row" }}
                align='center'
                w='100%'
                justify='center'
                py='1rem'
                borderRadius='15px'
                border='1px solid'
                borderColor={borderColor}>

                <Flex
                  p='1rem'
                  bg={colorMode === "dark" ? "navy.900" : "transparent"}

                  width='100%'

                  align='center'
                  mb={{ sm: "24px", md: "0px" }}
                  me={{ sm: "0px", md: "24px" }}>

                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input defaultValue="test" {...register("name")} />
                  </FormControl>

                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>DOB</FormLabel>
                    <Input defaultValue="date" {...register("dob")} />
                  </FormControl>

                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup>
                      <HStack spacing="24px" >
                        <Radio value="Male" {...register("gender")}>Male</Radio>
                        <Radio value="Female" {...register("gender")}>Female</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>
                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Country</FormLabel>
                    <Input defaultValue="country" {...register("country")} />
                  </FormControl>

                </Flex>

              </Flex>
              <Flex
                direction={{ sm: "column", md: "row" }}
                align='center'
                w='100%'
                justify='center'
                py='1rem'
                borderRadius='15px'
                border='1px solid'
                borderColor={borderColor}
                mt={5}
              >
                <Flex
                  p='1rem'
                  bg={colorMode === "dark" ? "navy.900" : "transparent"}

                  width='100%'

                  align='center'
                  mb={{ sm: "24px", md: "0px" }}
                  me={{ sm: "0px", md: "24px" }}>

                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Phone No</FormLabel>
                    <Input defaultValue="0" {...register("phoneNumber")} />
                  </FormControl>

                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input defaultValue="email" {...register("email")} />
                  </FormControl>
                  <FormControl me={{ sm: "0px", md: "24px" }} isRequired>
                    <FormLabel>Photo</FormLabel>
                    <Input type="file" />
                  </FormControl>

                </Flex>
              </Flex>
              
               <Flex
                direction={{ sm: "column", md: "row" }}
                align='center'
                w='100%'
                justify='center'
                py='1rem'
                borderRadius='15px'
                border='1px solid'
                borderColor={borderColor}
                mt={5}>

                <Flex
                  p='1rem'
                  bg={colorMode === "dark" ? "navy.900" : "transparent"}

                  width='100%'

                  align='center'
                  mb={{ sm: "24px", md: "0px" }}
                  me={{ sm: "0px", md: "24px" }}>


                  <FormControl isRequired>
                    <FormLabel>Employee Type</FormLabel>
                    <RadioGroup defaultValue="Itachi">
                      <HStack spacing="24px">
                        <Radio value="Own" {...register("employeeType")}>Own</Radio>
                        <Radio value="Outsource"{...register("employeeType")}>Out Source</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>


                </Flex>
                <Flex
                  p='1rem'
                  bg={colorMode === "dark" ? "navy.900" : "transparent"}
                  width='100%'
                  align='center'
                  mb={{ sm: "24px", md: "0px" }}
                  me={{ sm: "0px", md: "24px" }}>


                  <FormControl isRequired>
                    <FormLabel>Employee Role</FormLabel>
                    <Select
                      options={employeeRoles}
                      placeholder="Select Role"
                    />
                  </FormControl>


                </Flex><Flex
                  p='1rem'
                  bg={colorMode === "dark" ? "navy.900" : "transparent"}
                  width='100%'
                  align='center'
                  mb={{ sm: "24px", md: "0px" }}
                  me={{ sm: "0px", md: "24px" }}>


                  <FormControl isRequired>
                    <FormLabel>Salary</FormLabel>
                    <Input placeholder="salary" type="number"{...register("salary")} />
                  </FormControl>


                </Flex>
              </Flex>
              <Flex
                  direction={{ sm: "column", md: "row" }}
                  mt={5}
                >

                  <Spacer />
                  <Box p='4' >
                    <Button onClick={handleSubmit(onSubmit)} colorScheme="teal" size="md">
                      Save
                    </Button>
                  </Box>

                </Flex>
            </form>
          <AdditionalDetails/>

          
       </CardBody>
      </Card>
    </Flex>
  )
}