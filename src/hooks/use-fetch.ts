import useSWR, { ConfigInterface } from "swr";
import api from "services/api";
import { fetcherFn } from "swr/dist/types";

export function useFetch<Data = any, Error = any>(
  url: string,
  options?: ConfigInterface<Data, Error, fetcherFn<Data>>
) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.get(url);
      return response.data;
    },
    options
  );
  return { data, error, mutate };
}
