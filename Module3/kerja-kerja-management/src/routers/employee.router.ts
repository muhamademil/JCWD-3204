import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller";

class EmployeeRouter {
  public router: Router;
  private employeeController: EmployeeController;

  constructor() {
    this.router = Router();
    this.employeeController = new EmployeeController();
    this.InitializeRoutes();
  }

  private InitializeRoutes(): void {
    this.router.post(
      "/",
      this.employeeController.createEmployee.bind(this.employeeController)
    );

    this.router.get(
      "/",
      this.employeeController.getAllEmployee.bind(this.employeeController)
    );
    this.router.patch(
      "/employees/:id",
      this.employeeController.updateEmployeeStatus.bind(this.employeeController)
    );
    this.router.get(
      "/employees/salary/:id",
      this.employeeController.calculateNetSalary.bind(this.employeeController)
    );
  }
}

export default new EmployeeRouter().router;
