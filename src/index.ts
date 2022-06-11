import { config } from "dotenv";
config();

import express, { Express } from "express";
import routes from "./routers";

const app = express();
const PORT = process.env.PORT || 3001;

function createApp(): Express {
    const app = express();
    app.use("/api", routes);
    return app;
}

async function main() {
    try {
        const app = createApp();
        app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}

main();