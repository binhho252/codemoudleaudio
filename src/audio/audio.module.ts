import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AudioService } from './audio.service';
import { AudioController } from './audio.controller';
import { Audio, AudioSchema } from './audio.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Audio.name, schema: AudioSchema }])],
  controllers: [AudioController],
  providers: [AudioService],
})
export class AudioModule {}
