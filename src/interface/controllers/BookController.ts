import {Request, Response} from "express";
import {DIContainer} from "../../infra/DIContainer";
import { CreateBookDto } from "../dto/CreateBookDto";
import { validate } from "class-validator";
import { error } from "console";

export class BookController {
    private getAllBooks = DIContainer.getGetAllBookUseCase();

    async create(req: Request, res: Response){
        const dto = Object.assign(new CreateBookDto(), req.body);
        const errors = await validate(dto);

        if(error.length > 0){
            return res.status(400).json({errors});
        }
    }

    async getAll(req: Request, res: Response) {
        const books = await this.getAllBooks.execute();
        res.json(books);
    }
}