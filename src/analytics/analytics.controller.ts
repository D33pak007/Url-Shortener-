import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAnalytics( @Request() req) {
    // return req.user.email;
    const userId = req.user.email;
    return this.analyticsService.getAnalytics(userId);
  }
}