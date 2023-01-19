import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Lexend } from "@next/font/google"
import "../styles/globals.css";

import { api } from "../utils/api";

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '700']
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main className={lexend.className}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
