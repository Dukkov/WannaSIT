import express from "express";
import expressWs from "express-ws";
import morgan from "morgan";
import config from "./src/config/index.js";
import sessionMiddleware from "./src/middlewares/sessionMiddleware.js";
import corsMiddleware from "./src/middlewares/corsMiddleware.js";
import randomNameMiddleware from "./src/middlewares/randomNameMiddleware.js";
import setupWebSocket from "./webSocket.js";
import carsRouter from "./src/routes/carsRoutes.js";
import stationsRouter from "./src/routes/stationsRoutes.js";
import postsRouter from "./src/routes/postsRoutes.js";

const app = express();
expressWs(app);

const port = config.port;

// favicon 무시
app.use("/favicon.ico", () => {});
app.use(morgan("combined"));
app.use(sessionMiddleware);
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(randomNameMiddleware);

app.set("trust proxy", 1);

app.use("/stations", stationsRouter);
app.use("/cars", carsRouter);
app.use("/posts", postsRouter);

setupWebSocket(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
