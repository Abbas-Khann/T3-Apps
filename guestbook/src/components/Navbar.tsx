import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {

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
    <nav className="absolute top-[0px] left-[0px] bg-gray-300 w-[1440px] h-[92px]">
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
              onClick={() => signIn().catch(console.log)}
              >
                Login
              </button>
            </div>
          )}
    </nav>
  )
}

export default Navbar