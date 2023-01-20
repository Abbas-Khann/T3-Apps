import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { api } from "../utils/api";
import { GiCancel } from "react-icons/gi";

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
        <form className="modal modal-bottom sm:modal-middle"
        onSubmit={(event) => {
                event.preventDefault();
                postMessage.mutate({
                    name: session.user?.name as string,
                    message,
                })
                setMessage("");
            }}
        >
        <div className="modal-box relative">
          <label
            htmlFor="add-message-modal"
            className="btn btn-circle btn-sm absolute right-2 top-2"
          >
            <GiCancel />
          </label>
          <h3 className="pb-8 text-center text-2xl font-bold tracking-wider text-white subpixel-antialiased">
            Add New Message
          </h3>
          <div className="grid grid-cols-1 items-center justify-center">
            <input
              type="text"
              placeholder="Start typing..."
              minLength={3}
              maxLength={100}
              className="input input-primary"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            //   onChange={(event) => handleOnChange(event)}
            />
            <button
            type="submit"
              className="btn mt-5 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-lg tracking-widest text-white subpixel-antialiased"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    )
}

export default CreateMessageForm