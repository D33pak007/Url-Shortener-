import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UrlDocument = Url & Document;

@Schema({ collection: 'Urls' })
export class Url {
  @Prop({ required: true })
  originalUrl: string;

  @Prop({ required: true })
  shortUrl: string;

  @Prop({ default: 0 })
  clicks: number;

  @Prop({ nullable: true })
  expiresAt: Date;

  @Prop({ required: true })
  userId: string;

  // Add relationships with analytics data
}
export const UrlSchema = SchemaFactory.createForClass(Url);