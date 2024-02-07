import cors from "cors";

const corsOptions = {
  origin: ["http://localhost:3000", "https://ango-sesac.netlify.app"],
  credentials: true,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;