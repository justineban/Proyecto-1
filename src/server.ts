import express, { Application } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import cors from "cors";
import userRoutes from './routes/user.routes';
import bookRoutes from './routes/books.routes';
import connectDB from "./config/db";

const PORT = process.env.PORT || 8080;


dotenv.config();

const app: Application = express();


connectDB();



app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes); 
app.use('/api/user', userRoutes);
app.use('/api/books', bookRoutes);


app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
