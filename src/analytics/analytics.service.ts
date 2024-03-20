import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Analytics, AnalyticsDocument } from './analytics.schema';

@Injectable()
export class AnalyticsService {
  constructor(@InjectModel('Analytics') private readonly analyticsModel: Model<AnalyticsDocument>) {}

  async getAnalytics(userId: string) {
    return this.analyticsModel.find({ userId }).exec();
  }

  async trackAnalytics(shortUrl: string, referrer: string, browser: string, device: string,) {
    const analytics = new this.analyticsModel({
      shortUrl,
      referrer,
      browser,
      device,
      
    });

    await analytics.save();
  }
}