import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url, UrlDocument } from './url.schema';

import { RedisService } from '../redis/redis.service';
import * as shortid from 'shortid';
import { addDays } from 'date-fns';
import { AnalyticsService } from '../analytics/analytics.service';

@Injectable()
export class UrlService {
  constructor(
    @InjectModel('Url') private readonly urlModel: Model<UrlDocument>,
    private readonly redisService: RedisService,
    private readonly analyticsService: AnalyticsService,
  ) {}

  async create(originalUrl: String, userId: string) {
    const shortUrl = shortid.generate();
    const expiresAt = addDays(new Date(), 30);
    const url = new this.urlModel({ originalUrl, shortUrl,clicks:0, expiresAt, userId });
    return await url.save();
  }

  async findOne(shortUrl: string, userId: string, referrer: string, browser: string, device: string) {
    const cachedUrl = await this.redisService.get(shortUrl);
    if (cachedUrl) {
      await this.analyticsService.trackAnalytics(shortUrl, referrer, browser, device);
      return cachedUrl;
    }

    const url = await this.urlModel.findOne({ shortUrl, userId }).exec();
    if (url) {
      if (url.expiresAt && new Date() > url.expiresAt) {
        throw new Error('URL has expired');
      }

      await this.redisService.set(shortUrl, url.originalUrl);
      await this.analyticsService.trackAnalytics(shortUrl, referrer, browser, device);
      return url.originalUrl;
    }

    throw new Error('URL not found');
  }

  async findAllByUser(userId: number): Promise<Url[]> {
    return this.urlModel.find({ userId }).exec();
  }
}