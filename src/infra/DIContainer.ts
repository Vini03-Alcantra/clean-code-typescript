import { GetAllBooks } from "../use-cases/GetAllBooks";
import { InMemoryBookRepository } from "./repositories/InMemoryBookRepository";

class DIContainer {
    private static _bookRepository = new InMemoryBookRepository();

    static getBookRepository(){
        return this._bookRepository;
    }

    static getGetAllBookUseCase(){
        return new GetAllBooks(this.getBookRepository());
    }

}

export {DIContainer}