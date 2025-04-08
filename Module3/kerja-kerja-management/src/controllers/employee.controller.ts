import { Request, Response } from "express";
import { EmployeeService } from "../services/employee.services";

export class EmployeeController {
  private employeeService: EmployeeService;

  constructor() {
    this.employeeService = new EmployeeService();
  }

  public async updateEmployeeStatus(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const response = await this.employeeService.updateEmployeeStatus(
        Number(id),
        status
      );
      if (response) {
        res.status(200).send({
          message: "Successfully updated employee status",
          status: res.statusCode,
          data: response,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Internal server error",
        status: res.statusCode,
      });
    }
  }

  public async calculateNetSalary(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { bonus, deductions } = req.body;

      const response = await this.employeeService.calculateNetSalary(
        Number(id),
        deductions,
        bonus
      );
      if (response) {
        res.status(200).send({
          message: "Successfully calculate employee net salary",
          status: res.statusCode,
          data: response,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Internal server error",
        status: res.statusCode,
      });
    }
  }

  async getAllEmployee(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.employeeService.getAllEmployee();
      if (response) {
        res.status(200).send({
          message: "Succsess create employee data",
          status: res.statusCode,
          detail: response,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Internal server error",
        status: res.statusCode,
      });
    }
  }

  async createEmployee(req: Request, res: Response): Promise<void> {
    try {
      const { name, position, salary, status } = req.body;

      if (!name || !position || !salary || !status) {
        res.status(400).send({
          message: "All fieds are required",
        });
      }
      const newEmployee = {
        name: name,
        position: position,
        salary: salary,
        status: status,
      };

      const response = await this.employeeService.createEmployee(newEmployee);
      if (response) {
        res.status(201).send({
          message: "Succsess create employee data",
          status: res.statusCode,
          detail: response,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: "Internal server error",
        status: res.statusCode,
      });
    }
  }
}
