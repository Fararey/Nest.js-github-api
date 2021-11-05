import { Module } from '@nestjs/common';
import { GitDataModule } from './git-data/git-data.module';
import { AppController } from './app.controller';

@Module({
  imports: [GitDataModule],
  controllers: [AppController],
  providers: [],
  exports: [],
})
export class AppModule {}
