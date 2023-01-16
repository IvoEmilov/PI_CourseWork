import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { newsProviders } from './news.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [NewsController],
  providers: [...newsProviders,NewsService],
  exports: [],
})
export class NewsModule {}
