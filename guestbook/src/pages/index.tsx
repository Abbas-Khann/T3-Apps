import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import GuestbookEntries from "../components/GuestbookQueries";
import CreateMessageForm from "../components/CreateMessage";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

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
     <main className="">
          <Navbar />
          <Hero />
          {/* <CreateMessageForm /> */}
          <GuestbookEntries />
          <Footer />
     </main>
   )
}

export default Home