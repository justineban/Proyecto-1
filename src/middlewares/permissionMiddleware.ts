import { Response, NextFunction } from 'express';
import { AuthRequest } from '../custom';

export const updateUserPermissionMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const userIdFromParams = req.params.userId || req.user?.id;
    const userIdFromToken = req.user?.id;


    if (req.user?.hasPermission('edit_user') || userIdFromToken === userIdFromParams) {
        return next();
    }

    return res.status(403).json({ message: 'Acceso denegado' });
};

export const deleteUserPermissionMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const userIdFromParams = req.params.userId || req.user?.id;
    const userIdFromToken = req.user?.id;

    
    if (req.user?.hasPermission('delete_user') || userIdFromToken === userIdFromParams) {
        return next();
    }

    return res.status(403).json({ message: 'Acceso denegado' });
};

export const updateBookPermissionMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {

  
    if (req.user?.hasPermission('edit_book')) {
        return next();
    }

    return res.status(403).json({ message: 'Acceso denegado' });
};

export const deleteBookPermissionMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {

    
    if (req.user?.hasPermission('delete_book')) {
        return next();
    }

    return res.status(403).json({ message: 'Acceso denegado' });
};

export const createBookPermissionMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {

   
    if (req.user?.hasPermission('create_book')) {
        return next();
    }

    return res.status(403).json({ message: 'Acceso denegado' });
};
