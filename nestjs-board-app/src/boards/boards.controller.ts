import { Body, Controller, Get, Post } from '@nestjs/common';
import { appendFile } from 'fs';
import { Settings } from 'http2';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) { }
    
    @Get('/')
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post()
    creatBoard(
        @Body('title') title: string,
        @Body('description') description: string
    ): Board {
        return this.boardsService.creatBoard(title,description);
    }
}
