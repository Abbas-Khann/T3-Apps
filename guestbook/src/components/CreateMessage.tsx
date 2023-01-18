import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { api } from "../utils/api";

const CreateMessageForm = () => {
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
        <form
        className=""
        onSubmit={(event) => {
            event.preventDefault();
            postMessage.mutate({
                name: session.user?.name as string,
                message,
            })
            setMessage("");
        }}
        >
            <input 
            type="text"
            className=""
            placeholder="Your Message..."
            minLength={2}
            maxLength={150}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            />
            <button
            type="submit"
            className=""
            >
            Submit
            </button>
        </form>
    )
}

export default CreateMessageForm