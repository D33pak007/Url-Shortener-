import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    CacheModule.register({
      ttl: 60, 
      limit: 100,
    }),
    ThrottlerModule.forRoot(),
  ],
})
export class RateLimitModule {}