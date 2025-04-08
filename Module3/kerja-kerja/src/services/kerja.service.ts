import data from "../database/kerja.database.json";

interface IKerja {
  id: number;
  name: string;
  position: string;
  salary: number;
  status: string;
}

export class KerjaService {
  private kerjas: IKerja[] = data;
  private idCounter: number;

  constructor() {
    let maxID = 0;
    for (let i = 0; i < this.kerjas.length; i++) {
      if (this.kerjas[i].id > maxID) {
        maxID = this.kerjas[i].id;
      }
    }
    this.idCounter = maxID + 1;
  }

  getAllKerja(search?: string, sort?: string, filter?: string) {
    let result = [...this.kerjas];

    // Fitur search
    if (search) {
      result = result.filter((kerja: IKerja) =>
        kerja.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }

    // Fitur filter by status
    if (filter === "completed") {
      result = result.filter((kerja: IKerja) => kerja.status === "completed");
    } else if (filter === "pending") {
      result = result.filter((kerja: IKerja) => kerja.status === "pending");
    }

    return result;
  }

  addKerja(
    name: string,
    position: string,
    salary: number,
    status: string
  ): IKerja {
    const newKerja: IKerja = {
      id: this.idCounter++,
      name,
      position,
      salary,
      status,
    };
    this.kerjas.push(newKerja);
    return newKerja;
  }
}
