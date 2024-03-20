import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private userModel: Model<UserDocument>) {}

  async findOne(email: string): Promise<User | undefined> {
    // const u = {email: 'user1', password: '1234'};
    // const user   = await new this.userModel(u);
    // user.save();
   
    return this.userModel.findOne({ email }).exec();
  }
}