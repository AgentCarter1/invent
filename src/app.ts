import express from "express";
import userRoutes from "./routes/user.route";
import bookRoutes from "./routes/book.route";

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(bookRoutes);

export default app;
