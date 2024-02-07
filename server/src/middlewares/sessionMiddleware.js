import session from "express-session";
import { createClient } from "redis";
import RedisStore from "connect-redis";
import config from "../config/index.js";

const redisClient = createClient({
  password: config.redisPassword,
  socket: {
    host: config.redisHost,
    port: config.redisPort,
  },
});

redisClient.connect().catch(console.error);

const sessionMiddleware = session({
  secret: config.sessionSecret,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7일
  },
  store: new RedisStore({
    client: redisClient,
    prefix: "Ango:",
  }),
});

export default sessionMiddleware;
