import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Lexend } from "@next/font/google";
import "../styles/globals.css";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

import { api } from "../utils/api";

const lexend = Lexend({
  subsets: ['latin'],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ChakraProvider theme={theme}>
    <main className={lexend.className}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </main>
    </ChakraProvider>
  );
};

export default api.withTRPC(MyApp);
