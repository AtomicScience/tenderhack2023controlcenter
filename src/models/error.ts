import { z } from 'zod';

export const ErrorShortModelSchema = z.object({
  errorId: z.string(),
  errorKind: z.string(),
  errorType: z.string(),
  status: z.string(),
  date: z.string(),
  overallCount: z.number(),
  lastDayCount: z.number(),
  threeDaysCount: z.number(),
  oneMonthCount: z.number(),
});

export type ErrorShortModel = z.infer<typeof ErrorShortModelSchema>;