import { createTRPCRouter } from "./trpc";
import { guestbookRouter } from "./routers/guestbook";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  guestBook: guestbookRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;