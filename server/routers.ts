import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getContactsByUserId, createContact, deleteContact } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contacts: router({
    list: protectedProcedure.query(({ ctx }) =>
      getContactsByUserId(ctx.user.id)
    ),
    create: protectedProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          phone: z.string().min(1, "Phone is required"),
          city: z.string().min(1, "City is required"),
        })
      )
      .mutation(({ ctx, input }) =>
        createContact(ctx.user.id, input)
      ),
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(({ ctx, input }) =>
        deleteContact(input.id, ctx.user.id)
      ),
  })
});

export type AppRouter = typeof appRouter;
