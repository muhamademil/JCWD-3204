import { Request, Response, NextFunction } from "express";

export class AuthorizationMiddleware {
  static allowRoles(allowedRole: String | String[]) {
    return (req: Request, res: Response, next: NextFunction): void => {
      const user = (req as any).user;
      const roles = Array.isArray(allowedRole) ? allowedRole : [allowedRole];

      if (!user || !roles.includes(user.role)) {
        res.status(403).json({
          message: "Forbidden : insufficient role",
        });
      }
      next();
    };
  }
}
