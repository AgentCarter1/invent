import app from "./app";
import { sequelize } from "./database/database.connection";
import "./models/user.model"; // Modellerin yüklenmesi
import "./models/book.model";
import "./models/borrow-book.model";
import { setupAssociations } from "./models/associations"; // İlişki tanımlamalarının yüklenmesi

const PORT = process.env.PORT || 3000;

// İlişkileri kurma
setupAssociations();

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
