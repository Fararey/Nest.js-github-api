import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GitDataController } from './git-data.controller';
import { GidDataService } from './git-data.service';

@Module({
  imports: [HttpModule],
  controllers: [GitDataController],
  providers: [GidDataService],
  exports: [],
})
export class GitDataModule {}
