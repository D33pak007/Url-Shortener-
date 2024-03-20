import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';
import { UrlSchema } from './url.schema';
import { RedisModule } from '../redis/redis.module';
import { AuthModule } from '../auth/auth.module';
import { AnalyticsModule } from 'src/analytics/analytics.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Url', schema: UrlSchema }]),
    RedisModule,
    AuthModule,
    AnalyticsModule
  ],
  controllers: [UrlController],
  providers: [UrlService],
  exports:[UrlService]
})
export class UrlModule {}