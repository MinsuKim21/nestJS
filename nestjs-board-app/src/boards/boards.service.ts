import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }
    creatBoard(title: string, description: string){
        const board: Board = {
            id: uuid(),
            title, //자바스크립트에서 이름과 인수랑같다면 생략가능. title: title과 같음
            description, 
            status: BoardStatus.PUBLIC,
        }
        
        this.boards.push(board);
        return board;
    }
}
