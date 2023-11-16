import { z } from 'zod';

export const createTableSchema = z.object({
	title: z.string().min(3).max(64).trim(),
	imageUrl: z.string().min(1).trim().optional()
});
