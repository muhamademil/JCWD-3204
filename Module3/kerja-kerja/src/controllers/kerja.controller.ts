import { Request, Response } from "express";
import { KerjaService } from "../services/kerja.service";

export class KerjaController {
  private kerjaService: KerjaService;

  constructor() {
    this.kerjaService = new KerjaService();
  }

  public async addKerja(req: Request, res: Response): Promise<void> {
    try {
      const { name, position, salary, status } = req.body;

      // Validasi data
      if (!name || !position || !salary || !status) {
        return res.status(400).send({ message: "All fields are required" });
      }

      // Tambahkan kerja baru
      const newKerja = await this.kerjaService.addKerja(
        name,
        position,
        salary,
        status
      );

      // Kirim respon sukses
      return res
        .status(201)
        .send({ message: "Kerja added successfully", newKerja });
    } catch (error) {
      // Tangani error jika terjadi
      console.error(error); // Log error untuk debug
      return res.status(500).send({ message: "Internal Server Error" });
    }
  }

  public async getKerjas(req: Request, res: Response): Promise<void> {
    try {
      const { search, sort, filter } = req.query;

      // Ambil data pekerjaan sesuai dengan query
      const kerjas = await this.kerjaService.getAllKerja(
        search as string,
        sort as string,
        filter as string
      );

      // Kirim hasilnya ke user
      return res.status(200).send(kerjas);
    } catch (error) {
      // Tangani error jika terjadi
      console.error(error); // Log error untuk debug
      return res.status(500).send({ message: "Internal Server Error" });
    }
  }
}
