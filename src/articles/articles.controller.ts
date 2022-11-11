import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @Get()
  getAll() {
    return this.service.getArticles();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getArticle(params.id);
  }

  @Post()
  async create(@Body() article: Article) {
    return await this.service.putArticle(article);
  }

  @Put()
  async update(@Body() article: Article) {
    return await this.service.putArticle(article);
  }

  @Delete(':id')
  delete(@Param() params) {
    this.service.deleteArticle(params.id);
    return;
  }
}
