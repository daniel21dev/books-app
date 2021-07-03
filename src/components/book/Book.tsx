import React from 'react'
import { IBook } from '../layout/BooksContainer'

interface Props{
    book: IBook
}

export const Book: React.FC<Props> = ({ book }) => {
    return (
        <div className="sm:w-1/2 md:w-1/3 h-auto p-2 rounded border-2 border-gray-300 shadow-2xl flex items-center flex-col">
            <img className="h-64" src={ book.img } alt="book image"/>
            <p>{ book.name }</p>
            <p>{ book.desc }</p>
            <p>{ book.author }</p>
        </div>
    )
}
