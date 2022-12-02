import { SWRConfig } from "swr";
import { ChildrenFC } from "@custom-types/component";
import { CacheRecord, createAppCache } from "./initialization";

type Props = {
  initialCache?: CacheRecord;
};

const CacheProvider: ChildrenFC<Props> = ({ children, initialCache }) => {
  const cache = createAppCache(initialCache);
  return <SWRConfig value={{ provider: () => cache }}>{children}</SWRConfig>;
};

export default CacheProvider;
