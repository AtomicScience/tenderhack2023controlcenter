import { z } from 'zod';

export const ErrorShortModelSchema = z.object({
  error_uid: z.string(),
  title: z.string(),
  status: z.enum(["new", "in_progress", "resolved"]),
  date: z.string(),
  category: z.string(),
  logs_count_total: z.number(),
  logs_count_last_24h: z.number(),
  logs_count_last_3d: z.number(),
  logs_count_last_1mo: z.number(),
});

export type ErrorShortModel = z.infer<typeof ErrorShortModelSchema>;
export type ErrorStatus     = ErrorShortModel['status'];
export interface ErrorsDTO {
  errors: ErrorShortModel[]
}