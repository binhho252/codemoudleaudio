import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AudioDocument = Audio & Document;

@Schema()
export class Audio {
  @Prop({ required: true })
  audioId: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  audioSrc: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  level: string;

  @Prop({ default: 0 })
  duration: number;

  @Prop({ default: '00:00' })
  durationText: string;

  @Prop()
  artWorkUrl: string;

  @Prop({ default: 0 })
  totalViewed: number;

  @Prop()
  description: string;

  @Prop({ default: false })
  isCharacterAudio: boolean;

  @Prop({ default: false })
  isNumbersAudio: boolean;

  @Prop()
  youtubeVideoId: string;
}

export const AudioSchema = SchemaFactory.createForClass(Audio);
