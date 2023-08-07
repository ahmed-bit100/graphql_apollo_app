let books = [
  {
    id: '1',
    title: 'Zelda, Tears of the Kingdom',
    genres: ['fiction, adventure'],
  },
  {id: '2', title: 'Final Fantasy', genres: ['fiction', 'adventure']},
  {id: '3', title: 'A brief history of time', genres: ['popular science']},
  {id: '4', title: 'The Great Gatsby', genres: ['novel,fiction,tragedy']},
  {id: '5', title: 'Cosmos', genres: ['popular science']},
];

let authors = [
  {id: '1', name: 'auth1', verified: true},
  {id: '2', name: 'auth2', verified: false},
  {id: '3', name: 'auth3', verified: true},
];

let reviews = [
  {id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', book_id: '2'},
  {id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', book_id: '1'},
  {id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', book_id: '3'},
  {id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', book_id: '4'},
  {id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', book_id: '5'},
  {id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', book_id: '2'},
  {id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', book_id: '1'},
];

export default {books, authors, reviews};
