import "dotenv/config";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import testRouter from "./src/router/test";

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/test", testRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
