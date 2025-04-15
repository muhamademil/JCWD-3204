import express, { Application } from "express";
import { EmployeeRouter } from "./routers/employee.router";
import { AttendanceRouter } from "./routers/attendance.router";
import { AuthRouter } from "./routers/auth.router";
import { EmailROuter } from "./routers/email.router";

import cors from "cors";

class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 8000;
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(
      cors({
        origin: "*",
      })
    );
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use("/api", new EmployeeRouter().router);
    this.app.use("/api", new AttendanceRouter().router);
    this.app.use("/api", new AuthRouter().router);
    this.app.use("/api", new EmailROuter().router);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
