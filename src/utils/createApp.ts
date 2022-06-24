import { config } from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import routes from "../routes";
import store from "connect-mongo";

config();
require("../strategies/discord");


export function createApp(): Express {
    const app = express();
    // Enable Parsin Middleware for Requests
    app.use(express.json());
    app.use(express.urlencoded());

    // Enable CORS
    app.use(
        cors({
            origin: ["http://localhost:3000"],
            credentials: true,
        })
    );
    // Enable Sessions
    app.use(
        session({
            secret: "ASDFKASDLKFJASDFWEROQDFGGKLSASD",
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 600000 * 60 * 24 * 7,
            },
            store: store.create({
                mongoUrl: process.env.MONGODB_URI
            }),
        })
    );

    // Enable Passport
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => setTimeout(() => next(), 1000));

    app.use("/api", routes);
    return app;
}

