import { prisma } from "../prisma/client";
import { EmployeeInput, EmployeeQuery } from "../models/interface";

export class EmployeeService {
  async create(data: EmployeeInput) {
    return prisma.user.create({ data });
  }

  async findAll(query: EmployeeQuery) {
    const { search, position, departement, page = 1, limit = 10 } = query;
    const where: any = {};

    if (search) {
      where.name = {
        contains: search,
        mode: "insesntive", //insentive akan pengaruh ke search lowercase/uppercase
      };
    }

    if (position) {
      where.position = position;
    }

    if (departement) {
      where.departement = departement;
    }

    return prisma.user.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
    });
  }
  async findById(id: number) {
    return prisma.user.findUnique({
      where: { id },
    });
  }
  async update(id: number, data: Partial<EmployeeInput>) {
    return prisma.user.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  async delete(id: number) {
    return prisma.user.delete({
      where: { id },
    });
  }
}
