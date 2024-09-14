import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AudioService } from './audio.service';
import { Audio } from './audio.schema';

@Controller('audio')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}

  @Post()
  async create(@Body() audio: Audio) {
    return this.audioService.create(audio);
  }

  @Get()
  async findAll() {
    return this.audioService.findAll();
  }

  @Get(':audioId')
  async findOne(@Param('audioId') audioId: string) {
    return this.audioService.findOne(audioId);
  }

  @Put(':audioId')
  async update(@Param('audioId') audioId: string, @Body() audio: Audio) {
    return this.audioService.update(audioId, audio);
  }

  @Delete(':audioId')
  async delete(@Param('audioId') audioId: string) {
    return this.audioService.delete(audioId);
  }
}
