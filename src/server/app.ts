import express from "express";
import moviesRouter from "../routes/moviesRoutes";

const app = express();
const port = 8080;

app.use(express.json());
app.use("/movies", moviesRouter)

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
