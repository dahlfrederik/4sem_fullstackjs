import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        email: String
        role: String
    }
    """
    Queries available for Friends
    """
     type Query {
        """
        Returns all details for all Friends
        (Should probably require 'admin' rights if your are using authentication)
        """
        getAllFriends : [Friend]!
        """
        Only required if you ALSO wan't to try a version where the result is fetched from the existing endpoint
        """
        getAllFriendsProxy: [Friend]!
        
    }
    input FriendInput {
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }
    input FriendEditInput {
        firstName: String
        lastName: String
        password: String
        email: String!
    }
    type Mutation {
        """
        Allows anyone (non authenticated users) to create a new friend
        """
        createFriend(input: FriendInput): Friend

        """
        Allows anyone to edit a friend 
        """
        editFriend(input: FriendEditInput): Friend

        """
        Allows anyone to delete a friend     
        """
        deleteFriend(email: String!): String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
