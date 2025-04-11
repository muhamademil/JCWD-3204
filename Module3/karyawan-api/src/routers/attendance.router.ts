import { Router } from "express";
import { AttendanceController } from "../controllers/attendance.controller";

export class AttendanceRouter {
  public router: Router;
  private attendanceController: AttendanceController;

  constructor() {
    this.router = Router();
    this.attendanceController = new AttendanceController();
    this.routes();
  }

  private routes(): void {
    this.router.post(
      "/attendances/clock_in",
      this.attendanceController.clockIn.bind(this.attendanceController)
    );
    this.router.put(
      "/attendances/clock_out",
      this.attendanceController.clockOut.bind(this.attendanceController)
    );
    this.router.get(
      "/attendances/monthly",
      this.attendanceController.getMonthlyAttendance.bind(
        this.attendanceController
      )
    );
  }
}
