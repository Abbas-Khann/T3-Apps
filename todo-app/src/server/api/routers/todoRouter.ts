import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const todoRouter = createTRPCRouter({
    // query to get all the messages
    getAll: publicProcedure
    .query( async({ ctx }) => {
        try {
            // const todoWithIdOnly = await ctx.prisma.todo.findMany({ select: { id: true } })
            const data = await ctx.prisma.todo.findMany({
                select: {
                    name: true,
                    text: true,
                    createdAt: true
                },
                orderBy: {
                    createdAt: "desc"
                }
            })
            return data
        } 
        catch (err) {
            console.log("Error", err)
        }
    }),
    
    postMessage: protectedProcedure
    .input(
        z.object({
            name: z.string(),
            text: z.string(),
            createdAt: z.date()
        })
    )
    .mutation( async({ ctx, input }) => {
        try {
            await ctx.prisma.todo.create({
                data: {
                    name: input.name,
                    text: input.text,
                    createdAt: input.createdAt
                }
            })
        } 
        catch (err) {
            console.log("Error", err)
        }
    })
})
