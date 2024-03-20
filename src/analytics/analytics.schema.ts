import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnalyticsDocument = Analytics & Document;

@Schema({ collection: 'Analytics' })
export class Analytics {
  @Prop({ required: true })
  shortUrl: string;

  @Prop({ nullable: true })
  referrer: string;

  @Prop({ nullable: true })
  browser: string;

  @Prop({ nullable: true })
  device: string;

  @Prop({ default: 0 })
  clicks: number;
}

export const AnalyticsSchema = SchemaFactory.createForClass(Analytics);