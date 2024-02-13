import cors from "cors";

const corsOptions = {
  origin: ["http://localhost:3000", "https://angosipda.site", "http://ango-sesac.s3-website.ap-northeast-2.amazonaws.com"],
  credentials: true,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
