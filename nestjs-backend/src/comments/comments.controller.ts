import { Controller, Get, Post, Body } from '@nestjs/common';

import { CommentsService } from './comments.service';

@Controller('comments')

export class CommentsController {

  constructor(private readonly commentsService: CommentsService) {}

  @Get()

  async getComments() {

    return this.commentsService.getComments();

  }

  @Post()

  async addComment(@Body() body: { name: string; message: string }) {

    return this.commentsService.addComment(body);

  }

}