const gql = require('graphql-tag');


const typeDefs = gql`

type Query{
    tracksForHome: [Truck!]!
}

type Truck {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
}
type Author{
    id: ID!
    name: String!
    photo: String
}
`;

module.exports = typeDefs;
