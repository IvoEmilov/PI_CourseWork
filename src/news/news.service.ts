import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { NewsDto } from './news.dto';
import { News } from './news.entity';

@Injectable()
export class NewsService {
  constructor(
    @Inject('NEWS_REPOSITORY')
    private newsRepository: Repository<News>,
  ) {}

  public async getNews(id: number): Promise<News> {
    const news = await this.newsRepository.findOne({
      where: { id: id },
    });
    if(news){
      return news;
    }
    else{
    throw new NotFoundException(`News with id='${id}' does not exist!`);
    }
    
  }

  public async getAllNewsByPublishDate(publish_date: string): Promise<News[]>{
    const result = await this.newsRepository.find({ where: {publish_date: publish_date}});
    if(result.length){
      return result;
    } 
    else{
      throw new NotFoundException(`News with publishing date='${publish_date}' does not exist!`);
    }
  }
  

  public async addNews(news: NewsDto): Promise<News> {
    if(!news.publish_date){
      news.publish_date = new Date().toLocaleDateString('en-GB').replaceAll('/','.');
    }
    let createdNews = await this.newsRepository.save(news);
    createdNews = await this.newsRepository.findOne({
      where: { id: createdNews.id },
    });
    return createdNews;
  }

  public async deleteNews(id: number): Promise<DeleteResult> {
    let foundNews = await this.newsRepository.findOne({
      where: { id },
    });
    if (!foundNews) {
      throw new NotFoundException(`Delete unsuccessful! News with id='${id}' does not exist!`);
    }
    return this.newsRepository.delete({ id });
  }

}
