import { z } from "zod";

const BlogSchema = z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string()
});

export type BlogType = z.infer<typeof BlogSchema>;
export type BlogsType = BlogType[];
