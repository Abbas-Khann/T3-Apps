import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

// query to get all the messages in the guestbook
export const guestBookRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx }) => {
        try {
            return ctx.prisma.user.findMany({
                select: {
                    name: true,
                    message: true,
                },
                orderBy: {
                    createdAt: "desc"
                }
            });
        } 
        catch (err) {
            console.log("error", err)
        }
    })  
})

