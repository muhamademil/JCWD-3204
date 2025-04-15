import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller";
import { AuthenticationMiddleware } from "../middlewares/authentication.middleware";
import { AuthorizationMiddleware } from "../middlewares/authorization.middleware";
import { ValidationMiddleware } from "../middlewares/validation.middleware";

import { userSchema } from "../lib/validation/validation.schema";
import { upload } from "../middlewares/fileUpload.middleware";

export class EmployeeRouter {
  public router: Router;
  private employeeController: EmployeeController;

  constructor() {
    this.router = Router();
    this.employeeController = new EmployeeController();
    this.routes();
  }

  private routes(): void {
    this.router.get(
      "/employees",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("HR"),
      this.employeeController.findAll.bind(this.employeeController)
    );
    this.router.get(
      "/employees",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("HR"),
      this.employeeController.findById.bind(this.employeeController)
    );
    this.router.post(
      "/employees",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("HR"),
      ValidationMiddleware.validate({ body: userSchema.body }),
      this.employeeController.create.bind(this.employeeController)
    );
    this.router.put(
      "/employees/:id",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("HR"),
      ValidationMiddleware.validate({
        body: userSchema.body,
        params: userSchema.params,
        partial: true,
      }),
      this.employeeController.update.bind(this.employeeController)
    );
    this.router.delete(
      "/employees",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("HR"),
      this.employeeController.delete.bind(this.employeeController)
    );

    this.router.post(
      "/employees/payslips/:id",
      AuthenticationMiddleware.verifyToken,
      AuthorizationMiddleware.allowRoles("HR"),
      upload.single("payslips"),
      this.employeeController.uploadPayslip.bind(this.employeeController)
    );
  }
}
