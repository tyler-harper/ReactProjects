export const BookList = ({books}) => {
    return (
        <section className='booklist'>
            {books.map((book) => {
                return <Book {...book} key={book.id}></Book>
            })}
        </section>
    )
}