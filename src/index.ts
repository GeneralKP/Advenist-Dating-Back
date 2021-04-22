// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { connectDatabase } from "./infrastructure/database/index";
import { typeDefs, resolvers } from "./domain/graphql";

const mount = async (app: Application) => {
    const db = await connectDatabase();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ db }),
    });

    server.applyMiddleware({ app, path: "/api" });

    app.listen(process.env.PORT);

    console.log(`[app]: http://localhost:${process.env.PORT}`);

    const listings = await db.users.find({}).toArray();
    console.log(listings);
};

mount(express());
