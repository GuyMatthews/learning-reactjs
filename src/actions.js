export const testAction = () => ({
    type: 'TEST_ACTION',
    value: 42
});

export const receiveBooks = (books) => ({
    type: 'RECEIVE_BOOKS',
    books
})

export const fetchBooks = (dispatch) => {
    fetch("http://localhost:8000/api/books")
        .then(response => response.json())
        .then(books => {
            dispatch(receiveBooks(books))
        });
};