import { z } from 'zod';

export const ErrorInstanceSchema = z.object({
  raw_log_uid: z.string(),
  id: z.string(),
  created_date: z.coerce.date(),
  description: z.string(),
});

export type ErrorInstance = z.infer<typeof ErrorInstanceSchema>;
