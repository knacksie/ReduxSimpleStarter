export function selectBook(book) {
    console.log('Selected: ', book.title);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}