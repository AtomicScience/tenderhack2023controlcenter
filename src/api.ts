import { z } from 'zod';
import { ErrorShortModel, ErrorShortModelSchema, ErrorsDTO } from './models/error';
import { ErrorInstance, ErrorInstanceSchema } from './models/errorInstance';

export const SERVER = "http://10.9.67.97:8000";

export async function request<T>(...params: Parameters<typeof fetch>): Promise<T> {
  const response = await fetch(...params)
  if (!response.ok) throw new Error(response.statusText)
  return await response.json()
}

export const requestErrors = async (pageNumber: number, pageSize: number): Promise<ErrorsDTO> => {
  const params = new URLSearchParams({
    offset: `${(pageNumber - 1) * pageSize}`,
    limit: `${pageSize}`,
  });

  const result = request(SERVER + `/dashboard/errors?${params}`);

  return await result as ErrorsDTO;
}

export const requestError = async(errorId: string): Promise<ErrorShortModel> => {
  const result = request(SERVER + `/dashboard/errors/${errorId}`);

  return ErrorShortModelSchema.parse(await result);
}

export const requestErrorLogs = async(errorId: string, pageNumber: number, pageSize: number) : Promise<ErrorInstance[]> => {
  const params = new URLSearchParams({
    offset: `${(pageNumber - 1) * pageSize}`,
    limit: `${pageSize}`,
  });

  const result = request(SERVER + `/dashboard/errors/${errorId}/logs?` + params);

  return z.array(ErrorInstanceSchema).parse(await result);
}

export const requestProdFall = async (params: { id: string, created_date: string, description: string }): Promise<unknown> => {
  const result = request(SERVER + '/service', { 
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...params })
  });

  return await result;
}

export const requestMailing = async ({ error_uid, ...params }: { 
  recipients: string[],
  title: string,
  text: string,
  error_uid: string
}): Promise<unknown> => {
  const result = request(SERVER + '/dashboard/errors/' + error_uid + '/mail', { 
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...params })
  });

  return await result;
}