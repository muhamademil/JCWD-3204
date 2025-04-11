import { Request, Response, NextFunction } from "express";
import { UserPayload } from "../models/interface";

export class AuthorizationMiddleware {
  static allowRoles(user: UserPayload): any {
    return (req: Request, res: Response, next: NextFunction) => {
      if (!(req as any).user || !user.role) {
        return res.status(403).json({
          message: "Forbidden : no role provided",
        });
      }
      next();
    };
  }
}
