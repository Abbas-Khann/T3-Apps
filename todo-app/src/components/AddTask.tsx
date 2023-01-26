import { Box, Input, Button, Flex } from "@chakra-ui/react";
import React from "react";

const AddTask = (): JSX.Element => {
    return(
        <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"16"}
        >
        <Flex
        alignItems={"center"}
        justifyContent={"center"}
        w={["80%", "60%", "40%"]}
        >
            <Input 
            placeholder="Add Task"
            />
            <Button>Add</Button>
        </Flex>
        </Box>
    )
}

export default AddTask