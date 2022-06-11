import passport from "passport";
import { Profile, Strategy } from "passport-discord";

passport.use(
    new Strategy(
        {
            clientID: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
            callbackURL: process.env.DISCORD_CALLBACK_URL,
            scope: ["identify", "email", "guilds"],
        },
        async (accesToken: string, refreshToken: string, profile: Profile) => {

        }
    )
)