import { Cache, Key } from "swr";

export type CacheRecord = Record<string, any>;

const stringError = () => {
  throw new Error("Only string is allowed as a key");
};

class AppCache implements Cache<any> {
  private cache: CacheRecord = {};

  constructor(initialCache?: CacheRecord) {
    if (initialCache) this.cache = initialCache;
  }

  get(key: Key) {
    if (typeof key === "string") return this.cache[key];
    else stringError();
  }

  set(key: Key, value: any): void {
    if (typeof key === "string") {
      this.cache[key] = value;
    } else {
      stringError();
    }
  }

  delete(key: Key): void {
    if (typeof key === "string") {
      delete this.cache[key];
    } else {
      stringError();
    }
  }
}

const isServer = typeof window === "undefined";
let appCache: AppCache;

export function createAppCache(initialCache?: CacheRecord) {
  if (appCache && !isServer) return appCache;
  appCache = new AppCache(initialCache);
  return appCache;
}
