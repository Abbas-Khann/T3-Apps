import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { api } from "../utils/api";
import { ModalOverlay, useDisclosure, Button, Modal, ModalContent, ModalBody, ModalHeader, ModalFooter ,ModalCloseButton, Input, FormControl } from "@chakra-ui/react";

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
        // <form
        // className=""
        // onSubmit={(event) => {
        //     event.preventDefault();
        //     postMessage.mutate({
        //         name: session.user?.name as string,
        //         message,
        //     })
        //     setMessage("");
        // }}
        // >
        //     <input 
        //     type="text"
        //     className=""
        //     placeholder="Your Message..."
        //     minLength={2}
        //     maxLength={150}
        //     value={message}
        //     onChange={(event) => setMessage(event.target.value)}
        //     />
        //     <button
        //     type="submit"
        //     className=""
        //     >
        //     Submit
        //     </button>
        // </form>
        <FormControl
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        bgColor="black"
        onSubmit={(event) => {
              event.preventDefault();
              postMessage.mutate({
                  name: session.user?.name as string,
                  message,
              })
              setMessage("");
          }}
        >
        <Button
        bgGradient='linear(to-r,#15EFFB ,#5191FA , #5191FA)'
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
                  className=""
                  placeholder="Your Message..."
                  minLength={2}
                  maxLength={150}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
              />
            </ModalBody>
            <Button
            type="submit"
            w={"20"}
            marginY={2}
            >
              Submit
            </Button>
          </ModalContent>
        </Modal>
      </FormControl>
    )
}

export default CreateMessageForm