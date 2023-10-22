import { ErrorShortModel } from './models/error';

export const SERVER = "http://10.9.67.97:8000";

export async function request<T>(...params: Parameters<typeof fetch>): Promise<T> {
  const response = await fetch(...params)
  if (!response.ok) throw new Error(response.statusText)
  return await response.json()
}

export const requestErrors = async (): Promise<ErrorShortModel[]> => {
  const result = request(SERVER + '/dashboard/errors');

  return await result as ErrorShortModel[];
}