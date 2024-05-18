import express from "express";
import mainRouter from "./routers/mainRouter";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// http://localhost:3000/api/v1/
app.use("/api/v1", mainRouter);

const server = app.listen(0, () => {
  const address = server.address();

  if (address && typeof address !== "string") {
    console.log(`App is listening on port ${address.port}`);
  } else {
    console.log("App is listening on a UNIX domain socket");
  }
});
