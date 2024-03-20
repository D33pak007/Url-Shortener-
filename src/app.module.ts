import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlModule } from './url/url.module';
import { AuthModule } from './auth/auth.module';
import { RedisModule } from './redis/redis.module';
import { RateLimitModule } from './rate-limit/rate-limit.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AuthController } from './auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
   MongooseModule.forRoot('mongodb+srv://dkgupta250503:5vt8zUJO6eWQkHsv@cluster0.qwmxa20.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    UrlModule,
    AuthModule,
    RedisModule,
    RateLimitModule,
    AnalyticsModule,
    JwtModule.register({
      secret: 'your-secret-key', // Replace with your own secret key
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  
})
export class AppModule {}