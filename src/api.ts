import { ErrorsDTO } from './models/error';

export const SERVER = "http://10.9.67.97:8000";

export async function request<T>(...params: Parameters<typeof fetch>): Promise<T> {
  const response = await fetch(...params)
  if (!response.ok) throw new Error(response.statusText)
  return await response.json()
}

export const requestErrors = async (): Promise<ErrorsDTO> => {
  const result = request(SERVER + '/dashboard/errors');

  return await result as ErrorsDTO;
}

export const requestProdFall = async (): Promise<unknown> => {
  const result = request(SERVER + '/service', { 
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: "test",
      created_date: "2023-10-22T02:41:13.813Z",
      description: "Something went wrong!"
    })
  });

  return await result;
}