import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const guestbookRouter = createTRPCRouter({

    // query to get all the messages with the names and order the createdAt schema in a descending order
    getAll: publicProcedure
    .query( async({ ctx }) => {
        try {
             await ctx.prisma.guestbook.findMany({
                select: {
                    name: true,
                    message: true
                },
                orderBy: {
                    createdAt: "desc"
                }
            })
        }
        catch (err) {
            console.log("Error", err)    
        }
    }),

    // query to make a post request and add the input of name, message in an object format with the 

    postMessage: protectedProcedure
    .input(
        z.object({
            name: z.string(),
            message: z.string()
        })
    )
    .mutation( async ({ ctx, input }) => {
        try {
            await ctx.prisma.guestbook.create({
                data: {
                    name: input.name,
                    message: input.message
                }
            })
        } 
        catch (err) {
            console.log("Error", err)
        }
    })

})