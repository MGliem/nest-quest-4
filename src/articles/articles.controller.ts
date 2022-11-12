import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';
import { AuthGuard } from '@nestjs/passport';

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

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() article: Article) {
    return await this.service.putArticle(article);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put()
  async update(@Body() article: Article) {
    return await this.service.putArticle(article);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param() params) {
    this.service.deleteArticle(params.id);
    return;
  }
}
