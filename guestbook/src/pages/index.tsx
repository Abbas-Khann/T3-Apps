import React from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import GuestbookEntries from "../components/GuestbookQueries";
import CreateMessageForm from "../components/CreateMessage";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { TypeAnimation }  from "react-type-animation";

const Home = () => {

  const { data: session, status } = useSession<boolean>();

  if (status === "loading") {
    return (
      <>
        <Head>
          <title>GUESTBOOK — Loading</title>
          <meta
            property="og:title"
            content="GUESTBOOK — Loading"
            key="title_0"
          />
        </Head>
        <main className="flex h-screen items-center justify-center font-mono text-3xl font-semibold tracking-wider text-white subpixel-antialiased">
          Loading
          <TypeAnimation
            sequence={[" ", 62, ".", 125, "..", 250, "...", 500]}
            wrapper="div"
            cursor={false}
            repeat={Infinity}
          />
        </main>
      </>
    );
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
          <CreateMessageForm />
          <GuestbookEntries />
          <Footer />
     </main>
   )
}

export default Home