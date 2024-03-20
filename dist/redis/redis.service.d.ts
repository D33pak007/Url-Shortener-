import { Cache } from 'cache-manager';
export declare class RedisService {
    private cacheManager;
    constructor(cacheManager: Cache);
    get(key: string): Promise<string>;
    set(key: string, value: string): Promise<void>;
}
