import "dotenv/config";

const config = {
  port: process.env.PORT || 4000,
  sessionSecret: process.env.SESSION_SECRET,
  mongodbURI: process.env.MONGODB_URI,
  redisPassword: process.env.REDIS_PASSWORD,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
};

export default config;
