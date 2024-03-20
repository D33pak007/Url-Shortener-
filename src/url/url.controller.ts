import { Controller, Post, Body, Get, Param, UseGuards, Request, Redirect } from '@nestjs/common';
import { UrlService } from './url.service';


import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UrlDocument } from './url.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Controller('url')
export class UrlController {
  constructor(
    private readonly urlService: UrlService,
    @InjectModel('Url') private readonly urlModel: Model<UrlDocument> ) {}

  @Post('/shortUrl')
  @UseGuards(JwtAuthGuard)
  
  async create(@Body() originalUrl: string, @Request() req) {
    const userId = req.user.email;
  //  return userId;
    return this.urlService.create(originalUrl, userId);
  }

  @Get(':shorturl')
  // @Redirect()
  async findOne(
    @Param('shorturl') shortUrl: string,
  ) 
  {
    const url = await this.urlModel.findOne({ shortUrl }).exec();
  //  return url.userId;
    if(url){
    const userId = url.userId;
    const referrer = '';
    const browser =  '';
    const device =  '';
    return this.urlService.findOne(shortUrl, userId, referrer, browser, device);}

    throw new Error('url not found');
  }


  }