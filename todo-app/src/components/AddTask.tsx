import { Box, Input, Button, Flex } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { api } from "../utils/api";

const AddTask = (): JSX.Element => {
    const [todo, setTodo] = useState("");
    const { data: session, status } = useSession();
    console.log(todo)
    const postMessage = api.todoRouter.postMessage.useMutation();

    const addTodo = (): void => {
        postMessage.mutate({
            name: session?.user?.name as string,
            text: todo,
            createdAt: new Date()
        }),
        setTodo("")
    }

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
            type="text"
            minLength={2}
            maxLength={50}
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            />
            <Button
            onClick={addTodo}
            >
            Add
            </Button>
        </Flex>
        </Box>
    )
}

export default AddTask