import axios, { AxiosError } from 'axios';

export type ApiError = AxiosError<{ message: string }>

export const api = axios.create({
  baseURL: 'http://localhost:3050',
  withCredentials: true,
});