import React from "react";
import { background, Box, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";
import { api } from "../utils/api";
import { useSession } from "next-auth/react";


const GetTasks = (): JSX.Element => {
    const { data: todoEntries, isLoading } = api.todoRouter.getAll.useQuery();
    const deleteTodo = api.todoRouter.deleteTask.useMutation();
    const setTodoAsCompleted = api.todoRouter.completeTask.useMutation();
    const { data: session, status } = useSession();
    console.log(deleteTodo)
    console.log(todoEntries)

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
            >{entry.name} - {" "}  
            {entry.status.toString() === "false" ? "Yet to complete" : "Completed!!!"}
            </Text>
            </Flex>
            <Flex
            alignItems={"center"}
            justifyContent="center"
            >
            <DeleteIcon
            onClick={() => deleteTodo.mutate({
                id: entry.id
            })}
            boxSize={6} 
            focusable={true} 
            cursor="pointer"  
            />
            <CheckIcon 
            onClick={() => setTodoAsCompleted.mutate({
                id: entry.id,
                status: true
            })}
            boxSize={6} 
            focusable={true} 
            cursor="pointer" 
            marginX={5} 
            />
            <EditIcon 
            boxSize={6} 
            focusable={true} 
            cursor="pointer" 
            />
            </Flex>
            </Flex>
            )
            })}
        </Box>
    )
}

export default GetTasks