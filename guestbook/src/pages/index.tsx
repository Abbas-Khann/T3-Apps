import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import GuestbookEntries from "../components/GuestbookQueries";
import CreateMessageForm from "../components/CreateMessage";

const Home = () => {

  const { data: session, status } = useSession<boolean>();

  if(status === "loading") {
    return(
      <div
      className="flex flex-col items-center pt-4"
      >Loading...</div>
    )
  }

  if(status === "authenticated") {
    console.log("AUTHENTICATED");
  }
  else if(status === "unauthenticated") {
    console.log("UNAUTHENTICATED!!!")
  }

  return(
    <main className="flex flex-col items-center">
      <h1 className="text-3xl pt-4">Guestbook</h1>
      <div className="pt-10">
        {session ? (
          <>
          <p className="mb-4 text-center"
          >Hi {session.user?.name}
          </p>
          <button
          type="button"
          className="mx-auto block rounded-md bg-neutral-800 py-3 px-6 text-center hover:bg-neutral-700"
          onClick={() => signOut().catch(console.log)}
          >
            Logout
          </button>
          </>)
          :
          (
            <div>
              <button
              type="button"
              className="mx-auto block rounded-md bg-neutral-800 py-3 px-6 text-center hover:bg-neutral-700"
              onClick={() => signIn("discord").catch(console.log)}
              >
                Login
              </button>
            </div>
          )}
          <CreateMessageForm />
          <GuestbookEntries />
          </div>
    </main>
  )
}

export default Home
