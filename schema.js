// int,float,bool,string,ID

// "!" is to indicate that the field is required

export const typeDefs = `#graphql
type Book {
    id: ID!
    title: String!
    genres: [String!]!
    reviews: [Review!]
}
type Review {
    id:ID!
    rating:Int!
    content:String!
    author: Author!
    book:Book!
}
type Author {
    id:ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
}
type Query {
    reviews : [Review]
    review(id:ID!): Review
    books : [Book]
    book(id:ID!): Book
    authors : [Author]
    author(id:ID!): Author
}
`;
