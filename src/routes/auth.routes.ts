import { Router, Request, Response } from 'express';
import { registerController, loginController } from '../controllers/auth.controller';

const router = Router();

async function Register(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;
    const user = await registerController({ name, email, password });
    res.status(201).json({ message: 'Usuario registrado', user });
  } catch (error) {
    const errorMessage = error as Error;
    res.status(400).json({ message: errorMessage.message });
  }
}

async function Login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const { user, token } = await loginController(email, password);
    res.status(200).json({ message: 'Inicio de sesión exitoso', user, token });
  } catch (error) {
    const errorMessage = error as Error;
    res.status(400).json({ message: errorMessage.message });
  }
}

router.post('/register', Register);
router.post('/login', Login);

export default router;
