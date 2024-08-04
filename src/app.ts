import express from "express";
import userRoutes from "./routes/user.route";
import bookRoutes from "./routes/book.route";
import borrowRoutes from "./routes/borrow-book.route";

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(bookRoutes);
app.use(borrowRoutes);

export default app;
