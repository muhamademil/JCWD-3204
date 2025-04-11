import { AttendanceService } from "../services/attendance.services";
import { Request, Response } from "express";

export class AttendanceController {
  private attendanceService = new AttendanceService();

  constructor() {
    this.attendanceService = new AttendanceService();
  }

  public async clockIn(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.body;
      const date = new Date();
      const result = await this.attendanceService.clockIn({
        userId: userId,
        date: date,
      });
      res.status(201).json({
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: "Failed to clock in",
        detail: error,
      });
    }
  }

  public async clockOut(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.body;
      const date = new Date();
      const result = await this.attendanceService.clockOut({
        userId: userId,
        date: date,
      });
      res.status(201).json({
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: "Failed to clock out",
        detail: error,
      });
    }
  }

  public async getMonthlyAttendance(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { userId, startDate, endDate } = req.query;

      const now = new Date();
      const defaultStart = new Date(now.getFullYear(), now.getMonth(), 1);
      const defaultEnd = new Date(now.getFullYear(), now.getMonth(), 31);

      const result = await this.attendanceService.getMonthlyAttendance({
        userId: userId ? parseInt(userId as string) : undefined,
        startDate: (startDate
          ? new Date(startDate as string)
          : defaultStart
        ).toString(),
        endDate: endDate ? new Date(endDate as string) : defaultEnd,
      });
      res.status(200).json({
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        message: "Failed to get monthly attendance",
        detail: error,
      });
    }
  }
}
