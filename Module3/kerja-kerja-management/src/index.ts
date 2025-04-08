import express, { Application } from "express";
import employeeRouter from "./routers/employee.router";

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
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use("/api/employees", employeeRouter); // --> nama router untuk dipanggil di postman
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
