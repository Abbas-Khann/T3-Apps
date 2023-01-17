import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Home = () => {

  const { data: session, status } = useSession();

  if(status === "loading") {
    return(
      <div>Loading...</div>
    )
  }

  return(
    <main>
      <h1>GuestBook</h1>
      <div>
        {session ? (
          <>
          <p>Hi {session.user?.name}</p>
          <button
          onClick={() => signOut().catch(console.log)}
          >
            Logout
          </button>
          </>)
          :
          (
            <div>
              <button
              onClick={() => signIn("discord").catch(console.log)}
              >
                Login
              </button>
            </div>
          )}
          </div>
    </main>
  )
}

export default Home