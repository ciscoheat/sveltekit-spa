import { z } from 'zod';

// See https://zod.dev/?id=primitives for schema syntax
export const userSchema = z.object({
	id: z.number().int().positive(),
	name: z.string().min(2),
	email: z.string().email()
});
