import React from "react";
import { background, Box, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";
import { api } from "../utils/api";


const GetTasks = (): JSX.Element => {
    const { data: todoEntries, isLoading } = api.todoRouter.getAll.useQuery();
    console.log(todoEntries);

    if(isLoading) {
        return(
            <p>Hold the Fuck up Buddy!</p>
        )
    }

    return(
        <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        h={"16"}
        marginTop={24}
        >
            {todoEntries && todoEntries?.map((entry, idx) => {
            return(
            <Flex
            key={idx}
            bgColor={"#319795"}
            justifyContent={"space-between"}
            w={["90%", "70%", "55%"]}
            padding={"20px"}
            rounded="xl"
            marginBottom={"15px"}
            >
            <Flex
            flexDir={"column"}
            >
            <Text
            fontSize={"xl"}
            >{entry.text}</Text>
            <Text
            fontSize={"sm"}
            >{entry.name}</Text>
            </Flex>
            <Flex
            alignItems={"center"}
            justifyContent="center"
            >
            <DeleteIcon boxSize={6} focusable={true} cursor="pointer" />
            <CheckIcon boxSize={6} focusable={true} cursor="pointer" marginX={5} />
            <EditIcon boxSize={6} focusable={true} cursor="pointer" />
            </Flex>
        </Flex>
            )
            })}
        </Box>
    )
}

export default GetTasks