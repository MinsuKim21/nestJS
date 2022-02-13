import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { appendFile } from 'fs';
import { Settings } from 'http2';
import { CreatBoardDto} from './dto/create-board.dto';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) { }
    
    @Get('/')
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id)
    } 

    @Post()
    creatBoard(
        @Body() createBoardDto: CreatBoardDto
    ): Board {
        return this.boardsService.creatBoard(createBoardDto);
    }

    @Delete('/:id')
    delteBoard(@Param('id') id: string):void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus
    ) {
        return this.boardsService.updateBoardStatus(id, status)
    }
}
