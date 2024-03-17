import cors from "cors";

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = ["https://www.angosipda.site", "https://angosipda.site"];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

const corsMiddleware = cors(corsOptions);


export default corsMiddleware;
