import { z } from 'zod';

export const ErrorInstanceSchema = z.object({
  error_uid: z.string(),
  error_id: z.string(),
  date: z.coerce.date(),
  log: z.string(),
});

export type ErrorInstance = z.infer<typeof ErrorInstanceSchema>;
