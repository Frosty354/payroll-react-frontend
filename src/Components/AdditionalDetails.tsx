import React from 'react'

import {

//   Box,
//   Button,
//   Flex,


//   useColorMode,
//   useColorModeValue,
//   Spacer,
//   FormControl,
//   FormLabel,

//   Input,

  Tabs, TabList, TabPanels, Tab, TabPanel,
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


import BasicDetails from './DetailsComponents/BasicDetails';
import AdvanceDetails from './DetailsComponents/AdvanceDetails';
import OverTimeDetails from './DetailsComponents/OverTimeDetails';


const AdditionalDetails = () => {
    
   
  return (
    <div>
        <Tabs>
    <TabList>
      <Tab>Basic Details</Tab>
      <Tab>Advance</Tab>
      <Tab>Over Time</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <BasicDetails/>
        
      </TabPanel>
      <TabPanel>
        <AdvanceDetails/>
       
      </TabPanel>
      <TabPanel>
        <OverTimeDetails/>

      </TabPanel>
    </TabPanels>
        </Tabs>
  </div>
  )
}

export default AdditionalDetails