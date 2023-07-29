import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService]
})
export class CharactersModule {}
