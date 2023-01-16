import { Body, Controller, Get, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { UpdateDateColumn } from 'typeorm';
import { NewsDto } from './news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get(':id')
  async getNews(@Param('id') id) {
    const news = await this.newsService.getNews(id);
    return news;
  }

  @Get()
  getAllNewsByPublishDate(@Query('publish_date') publish_date:string){
    return this.newsService.getAllNewsByPublishDate(publish_date);
  }

  @Post()
  async addNews(@Body() news: NewsDto) {
    const added_news = await this.newsService.addNews(news);
    return added_news;
  }

  @Delete(':id')
  async deleteOneNews(@Param('id') newsID: number) {
    const hero = await this.newsService.deleteNews(newsID);
    return hero;
  }
}
