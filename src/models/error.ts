import { z } from 'zod';

export const ERROR_STATUSES = ["new", "in_progress", "resolved"] as const;

export const ErrorShortModelSchema = z.object({
  error_uid: z.string(),
  title: z.string(),
  status: z.enum(ERROR_STATUSES),
  date: z.string(),
  category: z.string(),
  logs_count_total: z.number(),
  logs_count_last_24h: z.number(),
  logs_count_last_3d: z.number(),
  logs_count_last_1mo: z.number(),
});

export type ErrorShortModel = z.infer<typeof ErrorShortModelSchema>;
export type ErrorStatus     = typeof ERROR_STATUSES[number];
export interface ErrorsDTO {
  errors: ErrorShortModel[]
}