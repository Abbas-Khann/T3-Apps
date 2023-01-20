import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import logo from "../../public/logo.png";

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
    <nav className="flex items-center justify-between px-5 sm:px-7 py-5 bg-[#0B1027]">
      <Image width={170} height={50} src={logo} alt="logo" />
        {session ? (
          <>
          <p className="mb-4 text-center text-white text-lg"
          >Hi {session.user?.name}
          </p>
          <button
          type="button"
          className="bg-transparent text-white px-4 py-0.5 border-[1px] border-slate-300 rounded-sm sm:px-10 sm:py-2 text-xl hover:bg-gradient-to-r from-[#15EFFB] via-[#5191FA] to-[#5191FA] hover:animate-pulse"
          onClick={() => signOut()}
          >
            Logout
          </button>
          </>)
          :
          (
            <div>
              <button
              type="button"
              className="bg-transparent text-white px-4 py-0.5 border-[1px] border-slate-300 rounded-sm sm:px-10 sm:py-2 text-xl hover:bg-gradient-to-r from-[#15EFFB] via-[#5191FA] to-[#5191FA] hover:animate-pulse"
              onClick={() => signIn()}
              >
                Login
              </button>
            </div>
          )}
    </nav>
  )
}

export default Navbar