import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsSchema } from './analytics.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Analytics', schema: AnalyticsSchema }])],
  providers: [AnalyticsService],
  controllers: [AnalyticsController],
  exports:[AnalyticsService]
})
export class AnalyticsModule {}
