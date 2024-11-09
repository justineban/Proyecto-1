import { Router, Response } from 'express';
import { updateUserController, desactivateUserController } from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/authMiddleware';
import { updateUserPermissionMiddleware, deleteUserPermissionMiddleware } from '../middlewares/permissionMiddleware';
import { AuthRequest } from '../custom';

const userRoutes = Router();

async function UpdateUser(request: AuthRequest, response: Response) {
  try {
    const userId = request.params.userId || request.user?.id;
    if (!userId) throw new Error('ID de usuario inexistente');

    const updates = request.body;
    const updatedUser = await updateUserController(userId, updates);

    response.status(200).json({
      message: 'Usuario actualizado',
      user: updatedUser,
    });
  } catch (error) {
    response.status(400).json({
      message: (error as Error).message,
    });
  }
}

async function DesactivateUser(request: AuthRequest, response: Response) {
  try {
    const userId = request.params.userId || request.user?.id;
    if (!userId) throw new Error('ID de usuario inexistente');

    await desactivateUserController(userId);
    response.status(200).json({
      message: 'Usuario desactivado',
    });
  } catch (error) {
    response.status(400).json({
      message: (error as Error).message,
    });
  }
}

userRoutes.put('/update/:userId?', authMiddleware, updateUserPermissionMiddleware, UpdateUser);
userRoutes.delete('/desactivate/:userId?', authMiddleware, deleteUserPermissionMiddleware, DesactivateUser);

export default userRoutes;
