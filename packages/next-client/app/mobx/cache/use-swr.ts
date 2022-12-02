import useSWRDefault, {
  BareFetcher,
  Fetcher,
  Key,
  SWRConfiguration,
  SWRResponse
} from "swr";

type Response<Data, Error> = SWRResponse<Data, Error> & {
  isLoading: boolean;
};

export interface SWRHook {
  <Data = any, Error = any, SWRKey extends Key = null>(key: SWRKey): Response<
    Data,
    Error
  >;
  <Data = any, Error = any, SWRKey extends Key = null>(
    key: SWRKey,
    fetcher: Fetcher<Data, SWRKey> | null
  ): Response<Data, Error>;
  <Data = any, Error = any, SWRKey extends Key = null>(
    key: SWRKey,
    config: SWRConfiguration<Data, Error, Fetcher<Data, SWRKey>> | undefined
  ): Response<Data, Error>;
  <Data = any, Error = any, SWRKey extends Key = null>(
    key: SWRKey,
    fetcher: Fetcher<Data, SWRKey> | null,
    config: SWRConfiguration<Data, Error, Fetcher<Data, SWRKey>> | undefined
  ): Response<Data, Error>;
  <Data = any, Error = any>(key: Key): Response<Data, Error>;
  <Data = any, Error = any>(
    key: Key,
    fetcher: BareFetcher<Data> | null
  ): Response<Data, Error>;
  <Data = any, Error = any>(
    key: Key,
    config: SWRConfiguration<Data, Error, BareFetcher<Data>> | undefined
  ): Response<Data, Error>;
  <Data = any, Error = any>(
    key: Key,
    fetcher: BareFetcher<Data> | null,
    config: SWRConfiguration<Data, Error, BareFetcher<Data>> | undefined
  ): Response<Data, Error>;
}

const useSWR: SWRHook = (...args: any[]) => {
  // @ts-ignore
  const result = useSWRDefault(...args);
  return {
    ...result,
    isLoading: !result.data && result.error
  } as ReturnType<SWRHook> & { isLoading: boolean };
};

export default useSWR;
