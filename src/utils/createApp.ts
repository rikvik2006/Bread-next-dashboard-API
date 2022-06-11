import express, { Express } from "express";
import cors from "cors";
import session from "express-session";
import routes from "../routers";

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

    app.use(
        session({
            secret: "ASDFKASDLKFJASDFWEROQDFGGKLSASD",
            resave: false,
            saveUninitialized: false, 
            cookie: {
                maxAge: 600000 * 60 * 24 * 7,
            }
        })
    )

    app.use("/api", routes);
    return app;
}

