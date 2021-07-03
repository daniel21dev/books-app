import { Book } from "../book/Book";

export interface IBook{
    id: string;
    name: string;
    desc : string;
    author: string;
    img?: string;
}
 
const books:Array<IBook> = [
    { id: '1', name: 'fundación', desc: 'a book from future', author: 'Isaac Asimov', img:'https://cloud10.todocoleccion.online/libros-segunda-mano-ciencia-ficcion-fantasia/tc/2008/11/28/10923973.jpg'},
    { id: '1', name: 'fundación', desc: 'a book from future', author: 'Isaac Asimov', img:'https://cloud10.todocoleccion.online/libros-segunda-mano-ciencia-ficcion-fantasia/tc/2008/11/28/10923973.jpg'},
    { id: '1', name: 'fundación', desc: 'a book from future', author: 'Isaac Asimov', img:'https://cloud10.todocoleccion.online/libros-segunda-mano-ciencia-ficcion-fantasia/tc/2008/11/28/10923973.jpg'},
    { id: '1', name: 'fundación', desc: 'a book from future', author: 'Isaac Asimov', img:'https://cloud10.todocoleccion.online/libros-segunda-mano-ciencia-ficcion-fantasia/tc/2008/11/28/10923973.jpg'},
];

export const BooksContainer = () => {
    return (
        <main className="mx-auto sm:w-full md:w-2/3 lg:w-1/2 p-4 flex flex-wrap justify-between">
            {
                books.map( book =>(
                    <Book key={ book.id } book={book}/>
                ))
            }
        </main>
    )
}
