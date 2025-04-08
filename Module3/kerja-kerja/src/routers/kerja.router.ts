// src/routers/kerja.router.ts
import { Router } from "express";
import { KerjaController } from "../controllers/kerja.controller";

export class KerjaRouter {
  public router: Router;
  private kerjaController: KerjaController;

  constructor() {
    this.router = Router();
    this.kerjaController = new KerjaController();
    this.initializeRoutes(); // Inisialisasi semua route pada konstruktor
  }

  // Method untuk mendefinisikan rute-rute pada router
  private initializeRoutes() {
    this.router.post(
      "/",
      this.kerjaController.addKerja.bind(this.kerjaController)
    );
    this.router.get(
      "/",
      this.kerjaController.getKerjas.bind(this.kerjaController)
    );
  }

  // Method untuk mendapatkan router yang sudah didefinisikan
  public getRouter(): Router {
    return this.router;
  }
}
