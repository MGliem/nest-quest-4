import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articlesRepository: Repository<Article>,
  ) {}

  async getArticles(): Promise<Article[]> {
    return await this.articlesRepository.find();
  }

  async getArticle(id: number): Promise<Article> {
    return await this.articlesRepository.findOneBy({ id: id });
  }

  putArticle(article: Article): Promise<Article> {
    return this.articlesRepository.save(article);
  }

  deleteArticle(article: Article): void {
    this.articlesRepository.delete(article);
  }
}
