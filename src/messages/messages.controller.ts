import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return '';
  }

  @Post()
  createMessage(@Body() body: any) {
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return id;
  }
}
