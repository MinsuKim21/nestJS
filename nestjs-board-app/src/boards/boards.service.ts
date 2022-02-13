import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreatBoardDto } from './dto/create-board.dto';
@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }
    creatBoard(creatBoardDto: CreatBoardDto){
        const { title, description } = creatBoardDto //const title = createBoardDto.title + const description = createBoardDto.description 
        const board: Board = {
            id: uuid(),
            title, //자바스크립트에서 이름과 인수랑같다면 생략가능. title: title과 같음
            description, 
            status: BoardStatus.PUBLIC,
        }
        
        this.boards.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        return this.boards.find((board) => board.id === id);
    }

    deleteBoard(id: string):void{
        this.boards = this.boards.filter((board)=> board.id !== id);
    }

    updateBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
