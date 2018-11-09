export const receiveBooks = (books) => ({
    type: 'RECEIVE_BOOKS',
    books
});

export const fetchBooks = (dispatch) => {
    return fetch("http://localhost:8000/api/books")
        .then(response => response.json())
        .then(books => {
            return receiveBooks(books);
        });
};

export const deleteBook = bookId => {
    return fetch(`http://localhost:8000/api/books/${bookId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application.json'
        },
        body: JSON.stringify({})
    }).then(response => response.json())
    .then(ok => {
        return {
            type: 'DELETE_BOOK',
            bookId
        };
    });
}