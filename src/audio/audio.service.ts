import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Audio, AudioDocument } from './audio.schema';

@Injectable()
export class AudioService {
  constructor(@InjectModel(Audio.name) private audioModel: Model<AudioDocument>) {}

  async create(audio: Audio): Promise<Audio> {
    const createdAudio = new this.audioModel(audio);
    return createdAudio.save();
  }

  async findAll(): Promise<Audio[]> {
    return this.audioModel.find().exec();
  }

  async findOne(audioId: string): Promise<Audio> {
    return this.audioModel.findOne({ audioId }).exec();
  }

  async update(audioId: string, audio: Audio): Promise<Audio> {
    return this.audioModel.findOneAndUpdate({ audioId }, audio, { new: true }).exec();
  }

  async delete(audioId: string): Promise<any> {
    return this.audioModel.deleteOne({ audioId }).exec();
  }
}
