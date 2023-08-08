import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {typeDefs} from './schema.js';
import db from './_db.js';

const resolvers = {
  Query: {
    books: () => db.books,
    book: (parent, args, content) => db.books.find((el) => el.id === args.id),
    reviews: () => db.reviews,
    review: (parent, args, context) =>
      db.reviews.find((el) => el.id === args.id),
    authors: () => db.authors,
    author: (parent, args, content) =>
      db.authors.find((el) => el.id === args.id),
  },
  Book: {
    reviews: (parent) => db.reviews.filter((el) => el.book_id === parent.id),
  },
  Author: {
    reviews: (parent) => db.reviews.filter((el) => el.author_id === parent.id),
  },
  Review: {
    author: (parent) => db.authors.find((el) => el.id === parent.author_id),
    book: (parent) => db.books.find((el) => el.id === parent.book_id),
  },
  Mutation: {
    deleteBook(_, args) {
      db.books.filter((el) => el.id !== args.id);
      console.log(args.id);
      return db.books;
    },
    addBook(_, args) {
      let book = {
        ...args.book,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.books.push(book);
      return book;
    },
    editBook(_, args) {
      db.books = db.books.map((el) =>
        el.id === args.id ? {...el, ...args.edits} : el
      );
      return db.books.find((el) => (el.id = args.id));
    },
  },
};

const server = new ApolloServer({
  // type defs : definitions of types of data
  typeDefs,
  // resolvers
  resolvers,
});

const {url} = await startStandaloneServer(server, {
  listen: {port: 5000},
});

console.log(`Server running on port ${url}`);
