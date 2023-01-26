import React from "react";
import { background, Box, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";

const GetTasks = (): JSX.Element => {
    return(
        <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        h={"16"}
        marginTop={5}
        >
        <Flex
        bgColor={"#319795"}
        justifyContent={"space-between"}
        w={["90%", "70%", "55%"]}
        padding={"20px"}
        rounded="xl"
        >
            <Text
            fontSize={"xl"}
            >Work on a stupid project as usual Abbassss</Text>
            <Flex>
            <DeleteIcon boxSize={6} focusable={true} cursor="pointer" />
            <CheckIcon boxSize={6} focusable={true} cursor="pointer" marginX={5} />
            <EditIcon boxSize={6} focusable={true} cursor="pointer" />
            </Flex>
        </Flex>
        </Box>
    )
}

export default GetTasks