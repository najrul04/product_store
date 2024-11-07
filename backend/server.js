import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path";

dotenv.config();
    
const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // A middleware that allows us to accept json data in the req.body

app.use('/api/products', productRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
}

app.listen(PORT, () => {
    connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
