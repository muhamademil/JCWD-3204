import { Router } from "express";
import { AttendanceController } from "../controllers/attendance.controller";

export class attendanceRouter {
  public router: Router;
  private attendanceController: AttendanceController;

  constructor() {
    this.router = Router();
    this.attendanceController = new AttendanceController();
    this.routes();
  }

  private routes(): void {
    this.router.post(
      "/attendance/clock_in",
      this.attendanceController.clockIn.bind(this.attendanceController)
    );
    this.router.post(
      "/attendance/clock_out",
      this.attendanceController.clockOut.bind(this.attendanceController)
    );
    this.router.get(
      "/attendance/monthly",
      this.attendanceController.getMonthlyAttendance.bind(
        this.attendanceController
      )
    );
  }
}
