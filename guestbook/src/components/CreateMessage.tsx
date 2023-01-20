import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { api } from "../utils/api";
import { ModalOverlay, useDisclosure, Button, Modal, ModalContent, ModalBody, ModalHeader, ModalFooter ,ModalCloseButton, Input, FormControl, Box } from "@chakra-ui/react";

const CreateMessageForm = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const [message, setMessage] = useState("");
    const {data: session, status} = useSession();
    const utils = api.useContext()
    const postMessage = api.guestBook.postMessage.useMutation({
        onMutate: async (newEntry) => {
            await utils.guestBook.getAll.cancel();
            utils.guestBook.getAll.setData(undefined, (prevEntries) => {
                if(prevEntries) {
                    return [newEntry, ...prevEntries];
                }
                else {
                    return [newEntry]
                }
            });
        },
        onSettled: async() => {
            await utils.guestBook.getAll.invalidate()
        }
    });

    if(status !== "authenticated") return null

    return(
        <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        bgColor="black"
        >
        <Button
        bgGradient='linear(to-r,#15EFFB ,#5191FA , #5191FA)'
        color={"white"}
        paddingX={10}
        paddingY={7}
        fontSize={25}
        marginBottom={5}
        _hover={{
          bgGradient: 'linear(to-l ,#15EFFB ,#5191FA , #5191FA)',
        }}
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          Add Message
        </Button>
        <Modal
        isCentered isOpen={isOpen} onClose={onClose}
        >
          {overlay}
          <ModalContent>
            <ModalHeader
            fontSize={20}
            textColor={"white"}
            >Add Message Here</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input 
              fontSize={25}
              bgGradient='linear(to-r,#15EFFB ,#5191FA , #5191FA)'
              rounded={"md"}
              paddingX={5}
              color={"black"}
              type="text"
                    placeholder="Your Message..."
                    minLength={2}
                    maxLength={150}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
              />
            </ModalBody>
            <Button
            w={"20"}
            marginY={2}
            onClick={(event) => {
                  event.preventDefault();
                  postMessage.mutate({
                      name: session.user?.name as string,
                      message,
                  })
                  setMessage("");
              }}
            >
              Submit
            </Button>
          </ModalContent>
        </Modal>
      </Box>
    )
}

export default CreateMessageForm